import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'pink',
  text: 'Button'
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default Button
