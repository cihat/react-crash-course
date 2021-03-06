import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()
  return (
    <header className="header">
      <h2 /* style={headingStyle} */>{title}</h2>
      {location.pathname === '/' && (
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: '--Default Value in Header.defaultProps Object--'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

//! CSS in JS
/* const headingStyle = {
  color: 'red',
  backgroundColor: 'black'
} */

export default Header
