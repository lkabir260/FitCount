import React from 'react';
import styles from './AddMacro.module.css';

const AddMacro = (props) => (
  <div
    className={styles.peg}
    style={{
      background: props.nutrient,
      border: props.nutrient ? `1px solid ${props.nutrient}`: '1px dashed grey',
      cursor: props.currentAmount && 'pointer'
    }}
    onClick={props.currentAmount ? props.handleMacroClick : null}
  />
);

export default AddMacro;
