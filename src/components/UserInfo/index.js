import {Component} from 'react'
import './index.css'

class UserInfo extends Component {
  render() {
    return (
      <div className="user-info-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          alt="profile"
          className="profile-image"
        />
        <h1 className="user-name">Wade Warren</h1>
        <p className="user-designation">Software Developer at UK</p>
      </div>
    )
  }
}

export default UserInfo
