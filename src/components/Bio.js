import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Sung Kim`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Tracked by <strong>Sung Kim</strong> who lives and works in New York
          City building useful(and many useless)things.{' '}
          <a href="https://twitter.com/slightedgecoder">Say Hi on Twitter</a>
        </p>
      </div>
    )
  }
}

export default Bio
