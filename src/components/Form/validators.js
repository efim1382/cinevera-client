/* eslint-disable no-useless-escape, max-len */

/**
 * return true if parameter is not valid
 */
export default {
	required: value => !value,
	minLength: (value, length) => value && value.length < length,
	maxLength: (value, length) => value && value.length > length,
	email: (value) => value && !value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
	number: value => value && !value.match(/^[0-9]+$/),
	url: value => !value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g),
};
