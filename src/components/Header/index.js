import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import Logo from '../../images/logo.svg';

class Header extends Component {
  render() {
    const { cartSize } = this.props;
    return (
      <Container>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>

        <Cart to="/cart">
          <div>
            <strong>Meus pedidos</strong>
            <span>{cartSize} itens </span>
          </div>
          <MdShoppingBasket size={36} color="#ffff" />
        </Cart>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
