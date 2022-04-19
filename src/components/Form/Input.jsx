import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import { Field } from "react-final-form";

const Input = ({ name, children, ...inputProps }) => {
  if (children.constructor === Array) {
    console.error(`Input "${name}" has few children elements. There will be rendered only first item of array`);
    children = children[0];
  }

  return (
    <Field name={name}>
      {
        ({ input, meta }) => {
          const error = (meta.error || meta.submitError) && meta.touched
            ? meta.error || meta.submitError
            : "";

          return cloneElement(children, {
            error,
            meta,
            ...input,
            ...inputProps,
          });
        }
      }
    </Field>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Input;
