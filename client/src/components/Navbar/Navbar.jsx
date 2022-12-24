import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <header>
      <div className={classes.container}>
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar;