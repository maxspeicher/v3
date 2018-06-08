const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/portfolio/'
  }
} : {};

const path = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/portfolio/' : '/';

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'The Portfolio of Maximilian Speicher',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: 'rgb(44, 62, 80)' },
      { hid: 'description', name: 'description', content: 'Portfolio of Maximilian Speicher.' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: path + 'M.png' },
      { rel: 'stylesheet', href: 'https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css' },
      { rel: 'stylesheet', href: path + 'css/main.css' },
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.3.1.min.js' },
      { src: 'https://use.fontawesome.com/releases/v5.0.13/js/all.js' },
      { src: path + 'js/90s-mode.js' }
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#111111' },
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

      config.module.rules.forEach((rule) => {
        if (rule.test.toString() === '/\\.(png|jpe?g|gif|svg)$/'){
          rule.use = [
            {
              loader: 'url-loader',
              options: {
                limit: 1000,
                name: 'img/[name].[hash:7].[ext]'
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65
                },
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: '65-90',
                  speed: 1,
                  verbose: true
                },
              }
            },
          ];
          delete rule.loader;
          delete rule.options;
        }
      })
    }
  },
  vendor: ['image-webpack-loader']
}
