import React from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img src={discover_weekly?.images[0].url} alt=""></img>
        <div className="body_infoText">
          <strong>PLAYLISTS</strong>
          <h2>
            Anirudh's <FavoriteIcon></FavoriteIcon>
          </h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon className="body_shuffle" />
          <FavoriteIcon fontSize="large"></FavoriteIcon>
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
