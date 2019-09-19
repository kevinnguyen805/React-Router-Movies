import React from 'react';
import {NavLink} from "react-router-dom"

function SavedList (props){



  return(
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    { <nav>
      <NavLink className="home-button" to="/"> Home </NavLink>
      </nav> }
  </div>
  )
};

export default SavedList;
