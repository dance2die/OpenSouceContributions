import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Sung's Open Source Contributions
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            &larr; Sung's Open Source Contributions
          </Link>
        </h3>
      )
    }

    const navigation = (
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink target="_self" href="https://www.sungkim.co/">
          Home
        </ListLink>
        <ListLink target="_blank" href="https://twitter.com/slightedgecoder">
          Contact
        </ListLink>
      </ul>
    )

    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(29),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {navigation}
        {header}
        {children()}
      </div>
    )
  }
}

const ListLink = ({ target, href, children }) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <a target={target} href={href}>
      {children}
    </a>
  </li>
)

export default Template
