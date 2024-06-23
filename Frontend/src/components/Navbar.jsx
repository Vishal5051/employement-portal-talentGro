import React from 'react';
import logo from "../assets/TalentGro-RetinaLogo.svg";
import { Link, NavLink } from 'react-router-dom';
import "../CSS/Navbar.css"
import { toast } from "react-hot-toast";
import { BiLogOut } from "react-icons/bi";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Routes } from "./Routes";
import HamburgerMenu from './HamburgerMenu';
import { Menu } from '@mantine/core';
import { FaUserCircle } from 'react-icons/fa';
import { MdDoneAll } from 'react-icons/md';

const Navbar = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='w-full flex justify-between items-center px-6 h-[70px] bg-primary-color border-b-2 z-20'>
      <div>
        <HamburgerMenu />
      </div>
      <NavLink to="/">
        <img src={logo} alt="Logo" loading="lazy" style={{ height: '60px', width: 'auto' }} />
      </NavLink>

      <nav className='nav-small'>
        <ul className="flex justify-center items-center">
          {Routes.map((route, index) => {
            const { href, title } = route;
            return (
              <li key={index}>
                <NavLink
                  to={href}
                  className="px-3 mx-4 text-[1.2rem] no-underline uppercase text-white"
                >
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="nav-container">
        {!isLoggedIn && (
          <NavLink to="/login">
            <button className="login-button">
              Login
            </button>
          </NavLink>
        )}

        {!isLoggedIn && (
          <NavLink to="/signup">
            <button className="signup-button">
              Sign Up
            </button>
          </NavLink>
        )}

        {isLoggedIn && (
          <div className='flex items-center justify-center gap-2 relative'>
            <div>
              <NavLink to="/">
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    toast.success("Logout Successfully");
                  }}>
                  <BiLogOut data-tooltip-id="my-logout-tooltip" size={30} color='white' />
                  <ReactTooltip
                    id="my-logout-tooltip"
                    place="bottom"
                    effect="solid"
                    className="custom-tooltip"
                    content="Logout"
                  />
                </button>
              </NavLink>
            </div>

            <div className='pr-8'>
              <Menu trigger="hover" openDelay={100} closeDelay={400}>
                <Menu.Target>
                  <img src="https://api.dicebear.com/5.x/initials/svg?seed=$kushal%kumar" className='avatar' alt="" />
                </Menu.Target>

                <Menu.Dropdown className='menu-dropdown'>
                  <Link to="/profile">
                    <Menu.Item>
                      <div className='sub-menu'>
                        <FaUserCircle size={18}/>
                        <span>My Profile</span>
                     </div>
                    </Menu.Item>
                  </Link>

                  <Link to="/applied">
                    <Menu.Item>
                      <div className='sub-menu'>
                        <MdDoneAll size={18} />
                        <span>Applied Jobs</span>
                      </div>
                      
                    </Menu.Item>
                  </Link>

                </Menu.Dropdown>
              </Menu>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
