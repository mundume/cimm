import React from "react";
import{
 FaChevronDown,
FaInbox,
FaAccessibleIcon,
FaAd,
} from 'react-icons/fa'
export const Sidebar = () => ( 
<div className="sidebar" data-testid="sidebar">
    <ul className="sidebar-generic">
        <li><span><FaInbox/></span><span>inbox</span></li>
        <li><span><FaAd/></span><span>Today</span></li>
      <li> <span><FaAccessibleIcon/></span><span>Tommorow</span></li>
      <li> <span><FaAccessibleIcon/></span><span>Next Week</span></li>
    </ul>
    <div className="sidebar__middle">
        <span><FaChevronDown/></span>
        <h2>projects</h2>
    </div>
   <ul className="sidebar__projects">Projects will be Here</ul>
   add project here
</div>

);