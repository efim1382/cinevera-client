import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import Icon from "components/Icon";
import TextField from "components/FormElements/TextField";
import LoadingRing from "components/LoadingRing";
import { searchActor } from "./cast.api";
import style from "./style.css";

const cx = classnames.bind(style);

const debounceTimeout = 500;
let debounceTimer;

const debounce = (callback, value) => {
	window.clearTimeout(debounceTimer);

	debounceTimer = setTimeout(() => {
		callback(value);
	}, debounceTimeout);
};

const CastField = (props) => {
	const {
		error,
		onChange,
		className,
	} = props;

	const [inputValue, setInputValue] = useState("");
	const [characterInputValue, setCharacterInputValue] = useState("");
	const [isRequestProcess, setIsRequestProcess] = useState(false);
	const [selectedActors, setSelectedActors] = useState([]);
	const [results, setResults] = useState([]);
	const [editableCharacterId, setEditableCharacterId] = useState("");

	const characterInline = {};

	const editableCharacter = useMemo(() => (
		results.find((item) => item.id === editableCharacterId)
	), [results, editableCharacterId]);

	if (editableCharacter && editableCharacter.photo) {
		characterInline["backgroundImage"] = `url(${editableCharacter.photo})`;
	}

	const isEditCharacterShown = editableCharacter && !isRequestProcess;

	const filteredResults = useMemo(() => (
		results.filter((item) => !selectedActors.find((selected) => item.id === selected.id))
	), [results, selectedActors]);

	const isSelectedActorsExist = selectedActors.length > 0;
	const isDropdownShown = isRequestProcess || editableCharacter || results.length > 0;
	const isResultsShown = !isRequestProcess && results.length > 0 && !editableCharacterId;

	const onCharacterInputChange = (event) => {
		setCharacterInputValue(event.target.value);
	};

	const search = (value) => {
		if (!isRequestProcess) {
			setIsRequestProcess(true);
		}

		searchActor({ query: value, limit: 10 })
			.then(({ result }) => {
				setResults(result);
			})

			.catch((error) => {
				console.log(error);
			})

			.finally(() => {
				setIsRequestProcess(false);
			});
	};

	const resetSearch = () => {
		if (isRequestProcess) {
			setIsRequestProcess(false);
		}

		setResults([]);
		setEditableCharacterId("");
		setInputValue("");
	};

	const onInput = (event) => {
		if (!event.target.value) {
			return resetSearch();
		}

		if (!isRequestProcess) {
			setIsRequestProcess(true);
		}

		setInputValue(event.target.value);
		debounce(search, event.target.value);
	};

	const addActorToCast = () => {
		if (!characterInputValue) {
			return;
		}

		if (!editableCharacter) {
			return;
		}

		if (!selectedActors.find((selected) => selected.id === editableCharacter.id)) {
			const actors = [
				...selectedActors,

				{
					actor: editableCharacter,
					characterName: characterInputValue,
				},
			];

			setSelectedActors(actors);

			if (onChange) {
				onChange(actors.map((item) => ({
					...item,
					actor: item.actor.id,
				})));
			}
		}

		resetSearch();
	};

	const removeSelectedActor = (id) => {
		const actors = selectedActors.filter((item) => item.actor.id !== id);
		setSelectedActors(actors);

		if (onChange) {
			onChange(actors.map((item) => ({
				...item,
				actor: item.actor.id,
			})));
		}
	};

	return (
		<div className={cx("cast_container", className)}>
			<TextField
				value={inputValue}
				label="Search"
				icon="search"
				error={error}
				isDisabled={!!editableCharacterId}
				onInput={onInput}
			/>

			{isDropdownShown && (
				<div className={style.dropdown}>
					{isResultsShown && filteredResults.map((item) => {
						const inline = {};

						if (item.photo) {
							inline["backgroundImage"] = `url(${item.photo})`;
						}

						const onClick = () => {
							setEditableCharacterId(item.id);
						};

						return (
							<button
								key={item.id}
								type="button"
								className={style.dropdown_item}
								onClick={onClick}
							>
								<div className={style.avatar} style={inline} />
								<p className={style.caption}>{item.name}</p>
							</button>
						);
					})}

					{isEditCharacterShown && (
						<div className={style.edit_character}>
							<div className={style.avatar} style={characterInline} />

							<div className={style.input_container}>
								<input
									autoFocus
									type="text"
									placeholder="Type character name here..."
									onChange={onCharacterInputChange}
									className={style.edit_input}
								/>

								<button type="button" className={style.add} onClick={addActorToCast}>Add</button>
							</div>
						</div>
					)}

					{isRequestProcess && (
						<LoadingRing isShown className={style.loading} />
					)}
				</div>
			)}

			{isSelectedActorsExist && (
				<div className={style.selected}>
					{selectedActors.map((item) => {
						const inline = {};

						if (item.actor.photo) {
							inline["backgroundImage"] = `url(${item.actor.photo})`;
						}

						const remove = () => {
							removeSelectedActor(item.actor.id);
						};

						return (
							<div key={item.actor.id} className={style.actor}>
								<div className={style.avatar} style={inline} />
								<p className={style.name}>{item.characterName}</p>

								<button type="button" className={style.remove} onClick={remove}>
									<Icon name="delete" />
								</button>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

CastField.propTypes = {
	error: PropTypes.string,
	onChange: PropTypes.func,
	className: PropTypes.string,
};

export default CastField;
