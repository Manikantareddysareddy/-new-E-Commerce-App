import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="sm-devices">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
      <li className="images">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png "
          alt="nav-logout"
        />
      </li>
    </div>
    <ul className="routes-container">
      <Link className="list-item" to="/">
        <li className="para">Home</li>
        <li className="images">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
          />
        </li>
      </Link>
      <Link className="list-item" to="/products">
        <li className="para">Products</li>
        <li className="images">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
          />
        </li>
      </Link>
      <Link className="list-item" to="/cart">
        <li className="para">Cart</li>
        <li className="images">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png "
            alt="nav cart"
          />
        </li>
      </Link>
      <li className="list-item">
        <button className="btn-para" type="button">
          Logout
        </button>
      </li>
    </ul>
  </div>
)

export default Header
