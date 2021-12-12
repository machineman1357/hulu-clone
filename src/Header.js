import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Header() {
    return (
        // BEM naming convention
        <div className="header">
            <div className="header__icons">
                <div className="header__icon header__icon--active">
                    <HomeIcon />
                    <p>Home</p>
                </div>

                <div className="header__icon">
                    <FlashOnIcon />
                    <p>Tending</p>
                </div>

                <div className="header__icon">
                    <LiveTvIcon />
                    <p>Verified</p>
                </div>

                <div className="header__icon">
                    <VideoLibraryIcon />
                    <p>Collections</p>
                </div>

                <div className="header__icon">
                    <SearchIcon />
                    <p>Search</p>
                </div>

                <div className="header__icon">
                    <PersonOutlineIcon />
                    <p>Account</p>
                </div>
            </div>
            <div>
                <img
                    className="header__huluImg"
                    src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
                    alt=""
                />
                <div className="header__machineman1357">
                    
                    
                    <a
                        href="https://github.com/machineman1357"
                        target="_blank"
                        rel="noreferrer"
                        style={{transform: "scale(1)"}}
                    >
                        <GitHubIcon />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/dennis-gedai-eichert-a49460109/"
                        target="_blank"
                        rel="noreferrer"
                        style={{transform: "scale(1.25)"}}
                    >
                        <LinkedInIcon />
                    </a>
                    <div>Machineman1357</div>
                </div>
            </div>
        </div>
    );
}

export default Header;
