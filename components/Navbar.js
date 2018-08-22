import Link from 'next/link'
import classnames from 'classnames'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggled: false
    }

    this._toggleHandle = this._toggleHandle.bind(this)
    this._blurHandle = this._blurHandle.bind(this)
  }

  _toggleHandle() {
    this.setState(prevState => ({
      isToggled: !prevState.isToggled
    }))
  }

  _blurHandle() {
    if (this.state.isToggled) {
      this.setState({ isToggled: false })
    }
  }

  render() {
    const { isToggled } = this.state

    if (typeof window !== 'undefined') {
      window.onclick = event => {
        const css = '.navbar-burger, .navbar-brand'
        const matches = event.target.matches
          ? event.target.matches(css)
          : event.target.msMatchesSelector(css)
        if (!matches) {
          this._blurHandle()
        }
      }
    }
    return (

      <div>
        <div>
          <nav
            className="navbar has-background-light is-transparent"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item">
                  <img
                    src="https://bulma.io/images/bulma-logo.png"
                    alt="Bulma: a modern CSS framework based on Flexbox"
                    width="112"
                    height="28"
                  />
                </a>
                <a
                  role="button"
                  className={classnames('navbar-burger', {
                    'is-active': isToggled
                  })}
                  ref={buttonDOM => {
                    this.buttonDOM = buttonDOM
                  }}
                  data-target="navMenu"
                  aria-label="menu"
                  aria-expanded="false"
                  onClick={this._toggleHandle}
                >
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                </a>
              </div>
              <div
                className={classnames('navbar-menu', { 'is-active': isToggled })}
              >
                <div className="navbar-start">
                  <Link href="/">
                    <a className="navbar-item">
                      Home
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className="navbar-item">
                      About
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}