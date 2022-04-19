import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import style from "./style.css";

const cx = classnames.bind(style);

const LoadingRing = ({ className, isShown }) => {
  return (
    <div className={cx("loading", className, { "_is-shown": isShown })} />
  );
};

LoadingRing.defaultProps = {
  isShown: false,
};

LoadingRing.propTypes = {
  className: PropTypes.string,
  isShown: PropTypes.bool,
};

export default LoadingRing;
