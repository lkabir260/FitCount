import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './SettingsPage.css';

const SettingsPage = (props) => {

  const selectedLevelStyle = {
    border: '2px solid #333'
  };

  function handleLevel(level) {
    props.handleLevel(level);
    props.history.push('/');
  }

  const colorKeys = Object.keys(props.colorsLookup);

  const levels = colorKeys.map(level => (
    <div className='rows' key={level}>
      <Button className="Settings-level-btn btn btn-default"
        style={level === props.difficulty ? selectedLevelStyle : null}
        disabled={level === props.difficulty}
        onClick={() => handleLevel(level)}
      >
        {level}
      </Button>
      <div className='Settings-level-colors'>
        {props.colorsLookup[level].map(color => 
          <div
            className='Settings-color'
            style={{backgroundColor: color}}
            key={color}
          />
      
        )}
      </div>
    </div>
  ));

  return (
    <div className='Settings'>
      <header className='header-footer'>Choose Macro for Counting</header>
      <div>
        {levels}
      </div>
      <div>
        
        <Link className='Settings-cancel btn btn-default btn-sm' to='/'>Cancel</Link>
      </div>
    </div>
  );

};

export default SettingsPage;
