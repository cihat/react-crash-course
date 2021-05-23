import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  const onClick = (e) => {
    console.log(e)
  }

  return (
    <header className="header">
      <h2 /* style={headingStyle} */>{title}</h2>
      <Button color="green" text="Add" onClick={onClick} />
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
