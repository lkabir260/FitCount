import React from 'react';
import styles from './AddLog.module.css';

const AddLog = (props) => (
  <div className={styles.AddLog}>
    {props.nutrient.map((nutrient, idx) =>
      <button
        key={nutrient}
        className={styles.button}
        style={{
          backgroundColor: props.selNutrientIdx === idx ? 'white' : nutrient,
          borderColor: nutrient
        }}
        onClick={() => props.HandleNutrientSelection(idx)}
      />
    )}
  </div>
);

export default AddLog;
