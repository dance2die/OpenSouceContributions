import Typography from 'typography'
// import Wordpress2016 from 'typography-theme-wordpress-2016'

// Wordpress2016.overrideThemeStyles = () => ({
//   'a.gatsby-resp-image-link': {
//     boxShadow: 'none',
//   },
// })

// delete Wordpress2016.googleFonts

// const typography = new Typography(Wordpress2016)
import githubTheme from 'typography-theme-github'

const typography = new Typography(githubTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
