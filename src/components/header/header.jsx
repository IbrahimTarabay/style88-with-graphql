import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import { auth } from '../../firebase/firebase.utils';

import {default as CartIcon} from '../cart-icon/cart-icon.container';
import CartDropdown from '../cart-dropdown/cart-dropdown';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.scss';

import style88 from '../../assets/style88.png';

const Header = ({currentUser,hidden}) =>(
    <div className='header'>
      <Link to="/">
       <img alt="style88" src={style88} style={{ height:100, width: 110 }} />
      </Link>
      <div className='options'>
          <Link className='option' to='/shop'>
              SHOP
          </Link>
          <Link className='option' to='/shop'>
              CONTACT
          </Link>
          {
            currentUser ?
            <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
            :
            <Link className='option' to='/signin'>SIGN IN</Link>
          }
          <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
        {/*we move the functionality of the CartDropdown
        outside the header component and put it inside of global redux state*/}
      </div>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})/*automatically pass the top level state*/

export default connect(mapStateToProps)(Header);