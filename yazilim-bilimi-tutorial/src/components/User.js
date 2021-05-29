import PropTypes from 'prop-types'
import React, { Component } from 'react'

class User extends Component {
  //! State'leri kullanırken bir yöntem
  state = {
    isVisible: false
  }

  onClickEvent = (e) => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  //! State'leri kullanırken bir yöntem

  render() {
    const { name, department, salary } = this.props
    const { isVisible } = this.state
    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div
            className="card-header d-flex p-1"
            style={{ justifyContent: 'space-between', alignItems: 'center' }}
            onClick={this.onClickEvent}
          >
            <h4 className="d-inline">{name}</h4>
            <i className="far fa-trash-alt" style={{ cursor: 'pointer' }}></i>
          </div>
          {isVisible ? (
            <div className="card-body">
              <p className="card-text">Maaş: {salary}</p>
              <p className="card-text">Department: {department}</p>
            </div>
          ) : null}
        </div> 
      </div>
    )
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.number.isRequired,
  department: PropTypes.string.isRequired
}

User.defaultProps = {
  name: 'Bilgi Yok',
  salary: 'Bilgi Yok',
  department: 'Bilgi Yok'
}

export default User
