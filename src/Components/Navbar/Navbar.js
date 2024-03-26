import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">EV-olution</div>
        <ul className="nav-menu">
          <li className="value">Home</li>
          <li className="value">Explore</li>
          <li className="value">About</li>
          <li className='nav-contact'>Contact</li>
        </ul>
    </div>
  )
}
export default Navbar;
