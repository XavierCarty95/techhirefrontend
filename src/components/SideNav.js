import React, { Component } from 'react'

export class SideNav extends Component {
    render() {
        return (
            <div className="icon-bar">
  <a href="www.facebook.com"  className="facebook"><i className="fa fa-facebook"></i></a>
  <a href="www.twitter.com" className="twitter"><i className="fa fa-twitter"></i></a>
  <a href="www.google.com" className="google"><i className="fa fa-google"></i></a>
  <a href="www.linkedin.com" className="linkedin"><i className="fa fa-linkedin"></i></a>
  <a href="www.youtube.com" className="youtube"><i className="fa fa-youtube"></i></a>
</div>
        )
    }
}

export default SideNav
