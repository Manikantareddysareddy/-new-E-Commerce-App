import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="Home-container">
      <div className="details-container">
        <h1 className="Home-heading">Clothes That Get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="new-image"
        />
        <p className="Home-para">
          Fashion is part of the daily air and it does not quite help that it
          changes all time. Clothes have always been a marker of the era and we
          are in a revolution. Your fashion makes you been seen and heard that
          way you are. So ,celebrate the seasons new and exiting fashion in your
          own way.
        </p>
        <button type="button" className="Home-button">
          Shop Now
        </button>
      </div>
      <div className="Home-image">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="image"
        />
      </div>
    </div>
  </>
)

export default Home
