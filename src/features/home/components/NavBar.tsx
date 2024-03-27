import { NavLink } from 'react-router-dom'

export const NavBar = () => {

  const navLinkStyles = (isActive: boolean) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      border: '1 solid white',
      marginRight: '15px'
    }
  }

  return (
    <nav>
      <NavLink to={'cake'} style={({ isActive }) => navLinkStyles(isActive)} >Cake  </NavLink>
      <NavLink to={'ice-cream'} style={({ isActive }) => navLinkStyles(isActive)}>Ice Cream  </NavLink>
      <NavLink to={'user'} style={({ isActive }) => navLinkStyles(isActive)}>User  </NavLink>
    </nav>
  )
}

export default NavBar
