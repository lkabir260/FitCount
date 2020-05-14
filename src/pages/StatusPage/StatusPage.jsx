import React from 'react';
import { Link } from 'react-router-dom';
import VisionBoard from '../../components/VisionBoard/VisionBoard';
import AddLog from '../../components/AddLog/AddLog';
import NewDay from '../../components/NewDay/NewDay';
import './StatusPage.css';

const StatusPage = (props) => {
  return (


    <div className="StatusPage">
      <div className="flex-h align-flex-end">
        <VisionBoard
          nutrient={props.nutrient}
          amounts={props.amounts}
          handleMacroClick={props.handleMacroClick}
        />
        <div className='StatusPage-controls'>
          <AddLog
            nutrient={props.nutrient}
            selNutrientIdx={props.selNutrientIdx}
            HandleNutrientSelection={props.HandleNutrientSelection}
          />


        </div>
        <div class="sidebar">
        <NewDay HandleDayClick={props.HandleDayClick}/>
          <Link className='btn btn-default StatusPage-link-margin' to='/settings'>Change Macro</Link>
          <Link className='btn btn-default StatusPage-link-margin' to='/FoodLog'>Log Your Meals</Link>
          <Link className='btn btn-default StatusPage-link-margin' to='/DisplayLogs'>View Logged Meals</Link>
        </div>
      </div>
      <footer className='header-footer'>
      </footer>
    </div>
  );

};

export default StatusPage;