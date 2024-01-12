import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showErrorMsg: false, errorMsg: ''}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitForm = async event => {
    const {username, password} = this.state
    const userDetails = {username, password}
    event.preventDefault()
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, showErrorMsg, errorMsg} = this.state
    return (
      <div className="Login-container">
        <div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo1"
            />
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
            alt="website login"
            className="login-image"
          />
        </div>
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo"
            />
          </div>
          <div className="input-container">
            <label htmlFor="username" className="user-label">
              USERNAME
            </label>
            <input
              type="text"
              placeholder="Username"
              id="username"
              className="inputEl"
              value={username}
              onChange={this.onChangeUsername}
            />
          </div>

          <div className="input-container">
            <label htmlFor="password" className="password-label">
              PASSWORD
            </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="inputEl"
              value={password}
              onChange={this.onChangePassword}
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
          {showErrorMsg && <p className="error-para">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
