import React, { Component } from 'react';
import './Navbar.css';

class Nav extends Component {
    render () {
        return (
            <nav class="navbar is-transparent">
            <div class="navbar-brand">
              <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
              </a>
              <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          
            <div id="navbarExampleTransparentExample" class="navbar-menu">
              <div class="navbar-start">
                <a class="navbar-item" href="https://bulma.io/">
                  Home
                </a>
              </div>
          
              <div class="navbar-end">
                <div class="navbar-item">
                  <div class="field is-grouped">
                    <p class="control">
                      <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                        <span>
                          Signup
                        </span>
                      </a>
                    </p>
                    <p class="control">
                      <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.9.0/bulma-0.9.0.zip">
                        <span>Login</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        )
    }
}

export default Nav