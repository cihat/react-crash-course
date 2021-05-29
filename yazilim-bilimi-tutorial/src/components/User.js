import PropTypes from 'prop-types'
import React, { Component } from 'react'
import UserConsumer from '../context'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      a: 10
    }
    console.log('Constructor')
  }
  //! State'leri kullanırken bir yöntem
  state = {
    isVisible: false
  }

  onClickEvent = (e) => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.setState({
      a: 20
    })
  }

  componentDidUpdate(prevProps, prevState) {}

  onDeleteUser = (dispatch, e) => {
    console.log('helloo')
    const { id } = this.props
    dispatch({ type: 'DELETE_USER', payload: id })
  }

  //! State'leri kullanırken bir yöntem

  render() {
    const { name, department, salary } = this.props
    const { isVisible } = this.state

    console.log('render')

    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value
          return (
            <div className="col-md-8 mb-4">
              <div className="card">
                <div
                  className="card-header d-flex p-1"
                  style={{
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <h4 className="d-inline" onClick={this.onClickEvent}>
                    {name}
                  </h4>
                  <i
                    className="far fa-trash-alt"
                    style={{ cursor: 'pointer' }}
                    onClick={this.onDeleteUser.bind(this, dispatch)}
                  ></i>
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
        }}
      </UserConsumer>
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
