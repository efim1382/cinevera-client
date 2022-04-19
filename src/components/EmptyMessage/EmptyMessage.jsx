import React from "react";
import PropTypes from "prop-types";
import Icon from "components/Icon";
import classnames from "classnames/bind";
import styles from "./style.css";

const cx = classnames.bind(styles);

const EmptyMessage = ({ text, className }) => {
  return (
    <div className={cx("empty_message", className)}>
      <Icon name="search" />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

EmptyMessage.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default EmptyMessage;
