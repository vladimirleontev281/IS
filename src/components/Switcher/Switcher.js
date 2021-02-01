import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Switcher.module.css';

const Switcher = ({value = true, yesText = 'is', noText = 'is not', clickHandler}) => {
  const [switcherValue, setSwitcherValue] = useState(value);
  const internalClickHandler = e => {
    setSwitcherValue(!switcherValue);
    if (clickHandler) clickHandler(e);
  };

  return <div className={`${styles.Switcher} ${!switcherValue ? styles.not : ''}`}
              onClick={internalClickHandler}
  >
    <div className={styles.background}>
      <span className={`${styles.case} ${styles.unselectable}`}>{yesText}</span>
      <span className={`${styles.case} ${styles.unselectable}`}>{noText}</span>
      <div className={styles.slider}/>
    </div>
  </div>
};
Switcher.propTypes = {
  value: PropTypes.bool,
  yesText: PropTypes.string, 
  noText: PropTypes.string, 
  clickHandler: PropTypes.func,
};
export default Switcher