import {Component} from 'react'

import './index.css'
import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="card-home">
          <div className="text-container">
            <h1 className="heading">Clothes That Get You Noticed</h1>
            <p className="pera">
              Fashion is part of the daily air and it does not quit help that it
              changes all the time. Clothes have been always been marker of the
              era and we are in a revelotion
            </p>
            <button className="button-decaration" type="button">
              Shop Now
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="image-card"
          />
        </div>
      </div>
    )
  }
}

export default Home
