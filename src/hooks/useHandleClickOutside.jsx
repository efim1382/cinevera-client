import { useEffect } from "react";

export default (refs = [], callback = Function()) => {
	if (refs?.constructor !== Array) {
		refs = [refs];
	}

	const handleClickOutside = (event) => {
		let isOutside = true;

		refs.forEach((ref) => {
			if (ref && ref.current && ref.current.contains(event.target)) {
				isOutside = false;
			}
		});

		if (isOutside) {
			callback();
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	});
};
