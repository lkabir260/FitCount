import React from 'react';
import AddMacro from '../AddMacro/AddMacro';
import './AddMacros.css';

const AddMacros = (props) => (
  <div className='AddMacros'>
    <AddMacro
      nutrient={props.nutrient[props.macCount[0]]}
      currentAmount={props.currentAmount}
      handleMacroClick={() => props.handleMacroClick(0)}
    />
    <AddMacro
      nutrient={props.nutrient[props.macCount[1]]}
      currentAmount={props.currentAmount}
      handleMacroClick={() => props.handleMacroClick(1)}
    />
    <AddMacro
      nutrient={props.nutrient[props.macCount[2]]}
      currentAmount={props.currentAmount}
      handleMacroClick={() => props.handleMacroClick(2)}
    />
    <AddMacro
      nutrient={props.nutrient[props.macCount[3]]}
      currentAmount={props.currentAmount}
      handleMacroClick={() => props.handleMacroClick(3)}
    />
        <AddMacro
      nutrient={props.nutrient[props.macCount[3]]}
      currentAmount={props.currentAmount}
      handleMacroClick={() => props.handleMacroClick(3)}
    />
        <AddMacro
      nutrient={props.nutrient[props.macCount[3]]}
      currentAmount={props.currentAmount}
      handleMacroClick={() => props.handleMacroClick(3)}
    />
        <AddMacro
      nutrient={props.nutrient[props.macCount[3]]}
      currentAmount={props.currentAmount}
      handleMacroClick={() => props.handleMacroClick(3)}
    />
        <AddMacro
      nutrient={props.nutrient[props.macCount[3]]}
      currentAmount={props.currentAmount}
      handleMacroClick={() => props.handleMacroClick(3)}
    />
        <AddMacro
      nutrient={props.nutrient[props.macCount[3]]}
      currentAmount={props.currentAmount}
      handleMacroClick={() => props.handleMacroClick(3)}
    />
        <AddMacro
      nutrient={props.nutrient[props.macCount[3]]}
      currentAmount={props.currentAmount}
      handleMacroClick={() => props.handleMacroClick(3)}
    />
        <AddMacro
      nutrient={props.nutrient[props.macCount[3]]}
      currentAmount={props.currentAmount}
      handleMacroClick={() => props.handleMacroClick(3)}
    />
        <AddMacro
      nutrient={props.nutrient[props.macCount[3]]}
      currentAmount={props.currentAmount}
      handleMacroClick={() => props.handleMacroClick(3)}
    />
        <AddMacro
      nutrient={props.nutrient[props.macCount[3]]}
      currentAmount={props.currentAmount}
      handleMacroClick={() => props.handleMacroClick(3)}
    />
    
  </div>
);

export default AddMacros;
