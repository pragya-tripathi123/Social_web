import React from 'react'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import SchoolIcon from '@mui/icons-material/School';
import "./sidebar.css"
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriends/CloseFriend"
export default function sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarwrapper">
        <ul className="sidebarList">
            <li className="sidebarListItem">
                <RssFeedIcon className='sidebarIcon'></RssFeedIcon>
                <span>Feed</span>
            </li>
            <li className="sidebarListItem">
                <ChatIcon className='sidebarIcon'></ChatIcon>
                <span>Chats</span>
            </li>
            <li className="sidebarListItem">
                <PlayCircleIcon className='sidebarIcon'></PlayCircleIcon>
                <span>Videos</span>
            </li>
            <li className="sidebarListItem">
                <GroupIcon className='sidebarIcon'></GroupIcon>
                <span>Groups</span>
            </li>
            <li className="sidebarListItem">
                <BookmarksIcon className='sidebarIcon'></BookmarksIcon>
                <span>Bookmarks</span>
            </li>
            <li className="sidebarListItem">
                <ContactSupportIcon className='sidebarIcon'></ContactSupportIcon>
                <span>Questions</span>
            </li>
            <li className="sidebarListItem">
                <WorkOutlineIcon className='sidebarIcon'></WorkOutlineIcon>
                <span>Jobs</span>
            </li>
            <li className="sidebarListItem">
                <InsertInvitationIcon className='sidebarIcon'></InsertInvitationIcon>
                <span>Event</span>
            </li>
            <li className="sidebarListItem">
                <SchoolIcon className='sidebarIcon'></SchoolIcon>
                <span>Courses</span>
            </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
           {Users.map(u =>(
                <CloseFriend key={u.id} user ={u}></CloseFriend>
           ))}
        </ul>
      </div>
    </div>
  )
}
