import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './Header.css'
import StripeCheckout from 'react-stripe-checkout'

class Header extends React.Component {
  constructor (props){
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', 
    this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset 

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render () {
    return (
      <div className={this.setState.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../images/gatsby-icon.png')} width="40"></img></Link>
          <Link to="/android">Android</Link>
          <Link to="/kotlin">Kotlin</Link>
          <Link to="/figma">Figma</Link>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfm9oGWSqN8gjLx-9KxdHE4OlK2UApbWzygkH-Qm5D7NeU5zQ/viewform"><button>Apply</button></a>
        </div>  
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
