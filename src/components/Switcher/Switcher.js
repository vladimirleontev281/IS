import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Switcher.module.css';

const Switcher = ({value = true, yesText = 'is', noText = 'is not', clickHandler, ...props}) => {
  const [leftRef, setLeftRef] = useState(React.createRef());
  const [rightRef, setRightRef] = useState(React.createRef());

  const [switcherValue, setSwitcherValue] = useState(value);
  const [widthValue, setWidthValue] = useState('auto');
  const widthStyle = {width: widthValue};

  useEffect(() => {
    const newWidth = Math.max(leftRef.current.offsetWidth, rightRef.current.offsetWidth);
    setWidthValue(`${newWidth}px`);
  }, []);

  const internalClickHandler = e => {
    setSwitcherValue(!switcherValue);
    if (clickHandler) clickHandler(e);
  };

  return <div className={`${styles.Switcher} ${!switcherValue ? styles.not : ''}`}
              onClick={internalClickHandler}
  >
    <div className={styles.background}>
      <span className={`${styles.case} ${styles.unselectable}`} ref={leftRef} style={widthStyle}>
        {yesText}
      </span>
      <span className={`${styles.case} ${styles.unselectable}`} ref={rightRef} style={widthStyle}>
        {noText}
      </span>
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