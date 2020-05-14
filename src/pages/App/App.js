import React, { Component } from 'react';
import './App.css';
import StatusPage from '../../pages/StatusPage/StatusPage';
import { Route, Switch } from 'react-router-dom';
import SettingsPage from '../SettingsPage/SettingsPage';
import FoodLog from '../FoodLog/FoodLog';
import DisplayLogs from '../DisplayLogs/DisplayLogs';
import styles from './mystyle.module.css'; 
import Button from 'react-bootstrap/Button';


const nutrient = {
  Carbohydrate: ['red'],
 Protein: ['blue'],
  Fat: ['green']
};

class App extends Component {
  constructor() {
    super();
    this.state = {...this.getInitialState(), difficulty: 'Carbohydrate'};
  }

  getInitialState() {
    return {
      selNutrientIdx: 0,
      amounts: [this.getNewOption()],
      macCount: [0,0,0,0,0,0,0,0,0,0],

    };
  }


  getNewOption() {
    return {
      macCount: [],
    };
  }



  handleLevel = (level) => {
    this.setState({difficulty: level}, () => this.HandleDayClick());
  }

  HandleNutrientSelection = (nutrientIdx) => {
    this.setState({selNutrientIdx: nutrientIdx});
  }

  HandleDayClick = () => {
    this.setState(this.getInitialState());
  }

  

  handleMacroClick = (pegIdx) => {
    let currentAmountIdx = this.state.amounts.length - 1;
    let amountsCopy = [...this.state.amounts];
    let amountCopy = {...amountsCopy[currentAmountIdx]};
    let macCountCopy = [...amountCopy.macCount];
    macCountCopy[pegIdx] = this.state.selNutrientIdx;
   amountCopy.macCount = macCountCopy;
    amountsCopy[currentAmountIdx] = amountCopy;
    this.setState({
        amounts: amountsCopy
    });
  }


  render() {
 
    return (


      <div>
        <header className='header-footer'>HEALT AND WELLNESS JOURNEY</header>
        <Button onClick={() => this.setState((state) => {
        return {
          selNutrientIdx: ++state.selColorIdx % 4
        };
      })}>
        Choosen Macro
      </Button>
        <h1> Welcome to your first step towards fitness!</h1>
        <h2> You can track your macros and calories by logging the food below</h2>
        
       <body className={styles.body}>
        Low-carb diets tend to improve signals of satiety (wanting to put the fork down) 
        and satiation (wanting to delay the next meal).
        Stable blood sugars and moderate l
        evels of blood insulin may be partly responsible for these healthful changes.
        <Switch>
          <Route exact path='/' render={() =>
            <StatusPage
              nutrient={nutrient[this.state.difficulty]}
              selNutrientIdx={this.state.selNutrientIdx}
              amounts={this.state.amounts}
              HandleNutrientSelection={this.HandleNutrientSelection}
              HandleDayClick={this.HandleDayClick}
              handleMacroClick={this.handleMacroClick}

            />
          } />
          <Route exact path='/settings' render={props => 
            <SettingsPage
              {...props} 
              colorsLookup={nutrient}
              difficulty={this.state.difficulty}
              handleLevel={this.handleLevel}
            />
          } />
          <Route exact path='/FoodLog' render={props => 
            <FoodLog
              {...props} 
            />
          } />
          <Route exact path='/DisplayLogs' render={props => 
            <DisplayLogs
              {...props} 
            />
          } />
        </Switch>
       
</body>
        

      </div>
    );
  }
}

export default App;
