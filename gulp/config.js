basePaths = {
  src: 'src/',
  dest: 'public/'
};

module.exports = {

  sass: {
    src: basePaths.src + 'scss/',
    dest: basePaths.dest,
    resultFile: 'styles.css',
    resultMinFile: 'styles.min.css',

    settings: {
      style: 'compressed',
      sourcemap: true,
      loadPath: basePaths.src + 'vendor'
    },

    autoprefixer: {
      browsers: [
        'ie >= 8',
        'ie_mob >= 10',
        'ff >= 29',
        'chrome >= 34',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 4.0'
      ]
    }
  },

  haml: {
    src: basePaths.src + 'haml/',
    dest: basePaths.dest
  },

  images: {
    src: basePaths.src + 'img/**',
    dest: basePaths.dest + 'img/'
  },

  sprite: {
    src: basePaths.src + 'sprite/**/*.png',
    cssDest: basePaths.src + 'scss/utils',
    imgDest: basePaths.dest + 'img/',

    settings: {
      imgName: 'sprite.png',
      cssName: '_sprite.scss',
      imgPath: 'img/sprite.png',
      padding: 5,
      cssFormat: 'scss',
      cssOpts: {
        functions: true
      },
      cssVarMap: function(sprite) {
        sprite.name = 'sp-' + sprite.name;
      }
    }
  },

  javascript: {
    // src: basePaths.src + 'js/**/*.{js,coffee}',
    dest: basePaths.dest,
    resultFile: 'app.js',
    resultMinFile: 'app.min.js'
  },

  browserify: {
    bundleConfigs: [{
      entries: './src/js/app.coffee',
      dest: './public/',
      outputName: 'app.js',
      extensions: ['.coffee'],
      debug: true,
      // defining transforms here will avoid crashing your stream
      // transform: ['coffeeify']
    }]
  }

};
