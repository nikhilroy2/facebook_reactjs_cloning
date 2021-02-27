import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {Avatar, IconButton} from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import AddIcon from '@material-ui/icons/Add'
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Header.css'
function Header(props) {
    return (
        <div className="header">
            <div className="header__left">
            <FacebookIcon fontSize="large" style={{fill: 'blue'}}/>

            <div className="header__input">
                <SearchIcon/>
                <input type="text" placeholder="Search facebook"/>
            </div>
            </div>
            <div className="header__center">
                <div className="header__option header__option--action">
                    <HomeIcon/>
                </div>
                <div className="header__option">
                    <FlagIcon/>
                </div>
                <div className="header__option">
                    <SubscriptionsIcon/>
                </div>
                <div className="header__option">
                    <StorefrontIcon/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon/>
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar></Avatar>
                    <h4>Nikhil Roy</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>
        </div>
    );
}

export default Header;