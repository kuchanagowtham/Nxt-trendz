import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="card">
          <div className="image-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="logo"
            />
          </div>
          <ul className="list-items">
            <li className="item">
              <Link to="/">Home</Link>
            </li>
            <li className="item">
              <Link to="/product">Products</Link>
            </li>
            <li className="item">
              <Link to="/cart">Cart</Link>
            </li>
            <li className="item">Logout</li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
