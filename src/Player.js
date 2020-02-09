import React from "react";
import "./Player.css";

const Player = props => {
  const backgroundStyles = {
    backgroundImage:`url(${
      props.item.album.images[0].url
    })`,
  };

  return (
    <div className="App">
      <div className="main-wrapper">
        <div className="background" style={backgroundStyles} />{" "}
        <div class="sidebar">
          <h1>Playlist</h1>
          <iframe src="https://open.spotify.com/embed/playlist/17ImVlRBCMJRLluWm2kvCb" width="400" height="600" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>        </div>
        <div class="content">
          <div class="info"></div>
          </div>
        </div>
      </div>
  );
}

export default Player;
