module.exports = function(grunt) {

  require('jit-grunt')(grunt);

  var autoprefixerOpts = {
    cascade: false,
    browsers: ["last 2 versions", "> 5%", "iOS >= 4", "Android >= 4", "IE >= 9", "Opera >= 12", "Firefox >= 3.6"]
  };

  grunt.initConfig({
    dirs: {
      iosbCoffeeDir: 'src/iosbadge/coffee',
      testCoffeeDir: 'src/test/coffee',
      demoCoffeeDir: 'src/demo/coffee',
      distDir: 'dist',
      iosbScssDir: 'src/iosbadge/scss',
      demoScssDir: 'src/demo/scss',
      testDir: 'test',
      demosDir: 'demo',
      demosJadeDir: 'src/demo/jade',
      readmeDir: 'src/readme',
      demoTmpDir: 'src/demo/tmp'
    },
    pkg: grunt.file.readJSON("package.json"),
    meta: {
      unmin: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= pkg.license %> */',
      min: '/*! <%= pkg.title || pkg.name %> v<%= pkg.version %> ' +
        '(c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= pkg.license %> */'
    },
    concat: {
      unmin: {
        options: {
          stripBanners: true,
          banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= pkg.license %> */\n\n',
        },
        src: '<%= dirs.distDir %>/<%= pkg.name %>.js',
        dest: '<%= dirs.distDir %>/<%= pkg.name %>.js'
      },
      readme: {
        src: ['<%= dirs.readmeDir %>/intro.md', '<%= dirs.readmeDir %>/howto.md', '<%= dirs.readmeDir %>/plugin_methods.md', '<%= dirs.readmeDir %>/plugin_options.md', '<%= dirs.readmeDir %>/browser_support.md', '<%= dirs.readmeDir %>/build.md'],
        dest: 'README.md',
        separator: '\n\n'
      },
      introJade: {
        src: ['<%= dirs.readmeDir %>/intro.md'],
        dest: '<%= dirs.demosJadeDir %>/intro.jade'
      }
    },
    sass: {
      iosb: {
        src: '<%= dirs.iosbScssDir %>/*.scss',
        dest: '<%= dirs.distDir %>/<%= pkg.name %>.css'
      },
      demo: {
        src: '<%= dirs.demoScssDir %>/demo.scss',
        dest: '<%= dirs.demosDir %>/css/demo.css'
      }
    },
    postcss: {
      demo: {
        options: {
          processors: [
            require("autoprefixer")(autoprefixerOpts)
          ]
        },
        src: '<%= dirs.demosDir %>/css/demo.css'
      },
      prefix: {
        options: {
          processors: [
            require("autoprefixer")(autoprefixerOpts)
          ]
        },
        src: '<%= dirs.distDir %>/<%= pkg.name %>.css'
      },
      min: {
        options: {
          processors: [
            require("cssnano")()
          ]
        },
        src: '<%= dirs.distDir %>/<%= pkg.name %>.css',
        dest: '<%= dirs.distDir %>/<%= pkg.name %>.min.css'
      }
    },
    uglify: {
      js: {
        options: {
          banner: '/*! <%= pkg.title || pkg.name %> v<%= pkg.version %> ' +
            '(c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= pkg.license %> */\n',
          screwIE8: true,
          mangle: true,
          mangleProperties: true,
          mangleRegex: /^_/
        },
        src: '<%= dirs.distDir %>/<%= pkg.name %>.js',
        dest: '<%= dirs.distDir %>/<%= pkg.name %>.min.js'
      }
    },
    coffee: {
      iosb: {
        src: '<%= dirs.iosbCoffeeDir %>/<%= pkg.name %>.coffee',
        dest: '<%= dirs.distDir %>/<%= pkg.name %>.js',
        options: {
          bare: true
        }
      },
      demo: {
        src: '<%= dirs.demoCoffeeDir %>/demo.coffee',
        dest: '<%= dirs.demosDir %>/js/demo.js'
      }
    },
    sizediff: {
      all: {
        src: [
          '<%= dirs.distDir %>/<%= pkg.name %>.css',
          //'<%= dirs.distDir %>/<%= pkg.name %>.min.css',
          '<%= dirs.distDir %>/<%= pkg.name %>.js',
          '<%= dirs.distDir %>/<%= pkg.name %>.min.js'
        ]
      }
    },
    jade: {
      demo: {
        options: {
          pretty: true,
          data: {
            intro: grunt.file.read('src/demo/tmp/intro.html'),
            howto: grunt.file.read('src/demo/tmp/howto.html'),
            plugin_methods: grunt.file.read('src/demo/tmp/plugin_methods.html'),
            plugin_options: grunt.file.read('src/demo/tmp/plugin_options.html'),
            browser_support: grunt.file.read('src/demo/tmp/browser_support.html'),
            build: grunt.file.read('src/demo/tmp/build.html')
          }
        },
        files: {
          '<%= dirs.demosDir %>/index.html': ["<%= dirs.demosJadeDir %>/demo.jade"]
        }
      }
    },
    shell: {
      mark_intro: {
        command: './node_modules/.bin/marked -o src/demo/tmp/intro.html src/readme/intro.md'
      },
      mark_howto: {
        command: './node_modules/.bin/marked -o src/demo/tmp/howto.html src/readme/howto.md'
      },
      mark_methods: {
        command: './node_modules/.bin/marked -o src/demo/tmp/plugin_methods.html src/readme/plugin_methods.md'
      },
      mark_options: {
        command: './node_modules/.bin/marked -o src/demo/tmp/plugin_options.html src/readme/plugin_options.md'
      },
      mark_browser: {
        command: './node_modules/.bin/marked -o src/demo/tmp/browser_support.html src/readme/browser_support.md'
      },
      mark_build: {
        command: './node_modules/.bin/marked -o src/demo/tmp/build.html src/readme/build.md'
      }
    },
    yuidoc: {
      compile: {
        options: {
          paths: "dist",
          outdir: "docs/"
        }
      }
    }
  });

  grunt.registerTask('default', ['coffee:iosb', 'sass:iosb', 'concat:unmin', 'uglify', 'postcss:prefix', 'postcss:min', 'sizediff', 'yuidoc', 'concat:readme']);
  grunt.registerTask('build', ['default']);
  grunt.registerTask('build-demo', ['coffee:demo', 'sass:demo', 'postcss:demo', 'shell', 'jade:demo', 'concat:readme']);
  grunt.registerTask('size', ['sizediff']);
};
