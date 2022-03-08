import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorPresent: false,
    errorMsg: '',
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = Msg => {
    this.setState({errorPresent: true, errorMsg: Msg})
  }

  submitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
      console.log(data.error_msg)
    }
  }

  render() {
    const {username, password, errorPresent, errorMsg} = this.state

    return (
      <div className="login-main-container">
        <div className="login-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-image"
          />
          <div className="form-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="logo-image"
            />
            <form className="login-form" onSubmit={this.submitForm}>
              <label htmlFor="username" className="label">
                username
              </label>
              <div className="input-container">
                <input
                  type="text"
                  id="username"
                  value={username}
                  placeholder="username"
                  onChange={this.changeUsername}
                />
              </div>
              <label htmlFor="password" className="label">
                PASSWORD
              </label>
              <div className="input-container">
                <input
                  type="password"
                  id="password"
                  value={password}
                  placeholder="Password"
                  onChange={this.changePassword}
                />
              </div>
              <button type="submit" className="submit-btn">
                Login
              </button>
              {errorPresent ? <p className="para">*{errorMsg}</p> : null}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
