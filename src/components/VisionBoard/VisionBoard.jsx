import React from 'react';
import DailyAmount from '../DailyAmount/DailyAmount';
import styles from './VisionBoard.module.css';

const VisionBoard = (props) => (
  <div className={styles.VisionBoard}>
    {props.amounts.map((amount, idx) =>
      <DailyAmount
        amount={amount}
        nutrient={props.nutrient}
        currentAmount={idx === (props.amounts.length - 1)}
        handleMacroClick={props.handleMacroClick}
        key={idx}
      />
    )}
  </div>
);

export default VisionBoard;
