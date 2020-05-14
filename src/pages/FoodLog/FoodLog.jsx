import React, { Component } from 'react';
import './FoodLog.css';


export default class FoodLog extends Component {
  constructor(props) {
    super(props);


    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCalories = this.onChangeCalories.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {

      description: '',
      calories: 0,

    }
  }


  onChangeDescription(e) {
this.setState({
      description: e.target.value
    })
  }

  onChangeCalories(e) {
    this.setState({
      calories: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const logs = {
      description: this.state.description,
      calories: this.state.calories,
    }
    window.location = '/DisplayLogs';
  }

  render() {
    return (
    <div>
      <h3>Food Log Journal</h3>
      <form onSubmit={this.onSubmit}>

        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Calories: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.calories}
              onChange={this.onChangeCalories}
              />
        </div>


        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}