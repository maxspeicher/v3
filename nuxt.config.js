const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/portfolio/'
  }
} : {};

const path = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/portfolio/' : '';

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'The Portfolio of Maximilian Speicher',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Portfolio of Maximilian Speicher.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: path + '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css' },
      { rel: 'stylesheet', href: path + 'css/main.css' },
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.3.1.min.js' },
      { src: 'https://use.fontawesome.com/releases/v5.0.13/js/all.js' },
      { src: path + 'js/nerd-mode.js' }
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'gold' },
  /*
  ** Build configuration
  */
  ...routerBase,
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
