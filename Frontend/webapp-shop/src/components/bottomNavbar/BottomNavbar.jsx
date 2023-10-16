import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineHeart, AiOutlineHome } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { BsHandbag } from 'react-icons/bs';
import './_bottomNavbar.scss';
export default class BottomNavbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <i>
              <NavLink to='/home' className='inactive'>
                <AiOutlineHome />
              </NavLink>
            </i>
          </li>

          <li>
            <i>
              <NavLink to='/search' className='inactive'>
                <AiOutlineSearch />
              </NavLink>
            </i>
          </li>

          <li>
            <i>
              <NavLink to='/shop' className='inactive'>
                <BsHandbag />
              </NavLink>
            </i>
          </li>

          <li>
            <i>
              <NavLink to='/favorites' className='inactive'>
                <AiOutlineHeart />
              </NavLink>
            </i>
          </li>

          <li>
            <i>
              <NavLink to='/profile' className='inactive'>
                <BiUserCircle />
              </NavLink>
            </i>
          </li>
        </ul>
      </nav>
    );
  }
}
