import React from 'react';
import AddMacros from '../AddMacros/AddMacros';
import styles from './DailyAmount.module.css';

const DailyAmount = (props) => (
  <div className={styles.DailyAmount}>
    <div
      className={styles.rowNum}
      style={{nutrient: props.currentAmount ? 'black' : 'lightgrey'}}
    >
    Tap to Add Macro =>
    </div>
    <AddMacros
      nutrient={props.nutrient}
      macCount={props.amount.macCount}
      currentAmount={props.currentAmount}
      handleMacroClick={props.handleMacroClick}
    />

  </div>
);

export default DailyAmount;
