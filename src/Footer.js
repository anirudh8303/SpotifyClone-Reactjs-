import React from "react";
import "./Footer.css";
import ShufleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <img src="" alt="" classNmae="song_image"></img>
        <div classNmae="footer_songInfo">
          <h4>Yeah</h4>
        </div>
      </div>
      <div className="footer_center">
        <ShufleIcon className="footer_green"></ShufleIcon>
        <SkipPreviousIcon className="footer_icon"></SkipPreviousIcon>
        <PlayCircleOutlineIcon
          fontSize="large"
          className="footer_icon"
        ></PlayCircleOutlineIcon>
        <SkipNextIcon className="footer_icon"></SkipNextIcon>
        <RepeatIcon className="footer_green"></RepeatIcon>
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
