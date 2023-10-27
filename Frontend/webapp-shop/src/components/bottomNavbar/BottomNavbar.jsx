import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineHeart, AiOutlineHome } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { BsHandbag } from 'react-icons/bs';
import './_bottomNavbar.scss';

export default class BottomNavbar extends Component {
  render() {
    return (
      <nav data-testid='bottom-navbar'>
        <ul>
          <li data-testid='bottom-navbar-link'>
            <i>
              <NavLink to='/home' className='inactive' data-testid='home-link'>
                <AiOutlineHome />
              </NavLink>
            </i>
          </li>

          <li data-testid='bottom-navbar-link'>
            <i>
              <NavLink
                to='/search'
                className='inactive'
                data-testid='search-link'
              >
                <AiOutlineSearch />
              </NavLink>
            </i>
          </li>

          <li data-testid='bottom-navbar-link'>
            <i>
              <NavLink
                to='/product'
                className='inactive'
                data-testid='shop-link'
              >
                <BsHandbag />
              </NavLink>
            </i>
          </li>

          <li data-testid='bottom-navbar-link'>
            <i>
              <NavLink
                to='/favorites'
                className='inactive'
                data-testid='favorites-link'
              >
                <AiOutlineHeart />
              </NavLink>
            </i>
          </li>

          <li data-testid='bottom-navbar-link'>
            <i>
              <NavLink
                to='/profile'
                className='inactive'
                data-testid='profile-link'
              >
                <BiUserCircle />
              </NavLink>
            </i>
          </li>
        </ul>
      </nav>
    );
  }
}
