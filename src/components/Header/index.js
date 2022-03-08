import './index.css'

const Header = () => (
  <ul className="nav-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="logo-image"
    />
    <li className="para1">Home</li>
    <li className="para1">Products</li>
    <li className="para1">Cart</li>
    <button type="button" className="logout-button">
      Logout
    </button>
  </ul>
)
export default Header
