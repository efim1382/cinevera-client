import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const Icon = ({ name, className, iconSize }) => {
  const style = {};

  if (iconSize) {
    style["--icon-size"] = iconSize;
  }

  return (
    <i className={cx("icon", className)} data-icon={name} style={style} />
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  iconSize: PropTypes.string,
};

export default Icon;
