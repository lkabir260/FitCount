import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Log = props => (
  <tr>
    <td>{props.log.username}</td>
    <td>{props.log.description}</td>
    <td>{props.log.duration}</td>
    <td>{props.log.date.substring(0,10)}</td>

  </tr>
)

export default class LogsList extends Component {
  constructor(props) {
    super(props);



    this.state = {logs: []};
  }


  logList() {
    return this.state.logs.map(currentLog => {
      return <Log log={currentLog}  key={currentLog._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h2>Logged Items</h2>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Description</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            { this.logList() }
          </tbody>
        </table>
      </div>
    )
  }
}