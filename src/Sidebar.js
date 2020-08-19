import React from "react";
import "./Sidebar.css";
import Sidebaroptions from "./Sidebaroptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log(playlists);
  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify_logo"
      />
      <Sidebaroptions title="Home" Icon={HomeIcon} />
      <Sidebaroptions title="Search" Icon={SearchIcon} />
      <Sidebaroptions title="Your library" Icon={LibraryMusicIcon} />
      <br></br>
      <br></br>
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <Sidebaroptions title={playlist.name}></Sidebaroptions>
      ))}
    </div>
  );
}

export default Sidebar;
