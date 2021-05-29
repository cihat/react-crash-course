import PropTypes from 'prop-types'
import React from 'react'

const Navbar = (props) => {
  const { title } = props
  return (
    <div>
      <h3>{title}</h3>
      <hr />
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Default App'
}

export default Navbar
