/*global module:false*/
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-jasmine-task');
  grunt.loadNpmTasks('grunt-coffee');
  grunt.loadNpmTasks('grunt-compass');
  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-sizediff');
  grunt.loadNpmTasks('grunt-shell');

  // Project configuration.
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
    pkg: '<json:iosbadge.jquery.json>',
    meta: {
      unmin: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */',
      min: '/*! <%= pkg.title || pkg.name %> v<%= pkg.version %> ' +
        '(c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    concat: {
      unmin: {
        src: ['<banner:meta.unmin>', '<file_strip_banner:<%= dirs.distDir %>/<%= pkg.name %>.js>'],
        dest: '<%= dirs.distDir %>/<%= pkg.name %>.js'
      },
      min: {
        src: ['<banner:meta.min>', '<file_strip_banner:<%= dirs.distDir %>/<%= pkg.name %>.min.js>'],
        dest: '<%= dirs.distDir %>/<%= pkg.name %>.min.js'
      },
      readme: {
        src: ['<%= dirs.readmeDir %>/intro.md', '<%= dirs.readmeDir %>/howto.md', '<%= dirs.readmeDir %>/plugin_methods.md', '<%= dirs.readmeDir %>/plugin_options.md', '<%= dirs.readmeDir %>/browser_support.md', '<%= dirs.readmeDir %>/build.md'],
        dest: 'readme.md',
        separator: '\n\n'
      },
      introJade: {
        src: ['<%= dirs.readmeDir %>/intro.md'],
        dest: '<%= dirs.demosJadeDir %>/intro.jade'
      }
    },
    csslint: {
      all: {
        src: '<%= dirs.distDir %>/<%= pkg.name %>.css',
        rules: {
            'adjoining-classes': false,
            'font-sizes': false,
            'gradients': false
        }
      }
    },
    compass: {
      iosb: {
        src: '<%= dirs.iosbScssDir %>',
        dest: '<%= dirs.distDir %>',
        linecomments: false
      },
      demo: {
        src: '<%= dirs.demoScssDir %>',
        dest: '<%= dirs.demosDir %>/css',
        linecomments: false
      }
    },
    coffee: {
      iosb: {
        src: ['<%= dirs.iosbCoffeeDir %>/<%= pkg.name %>.coffee'],
        dest: '<%= dirs.distDir %>',
        options: {
            bare: true
        }
      },
      test: {
        src: ['<%= dirs.testCoffeeDir %>/*.coffee'],
        dest: '<%= dirs.testDir %>/spec'
      },
      demo: {
        src: ['<%= dirs.demoCoffeeDir %>/*.coffee'],
        dest: '<%= dirs.demosDir %>/js'
      }
    },
    min: {
      all: {
        src: ['<%= dirs.distDir %>/<%= pkg.name %>.js'],
        dest: '<%= dirs.distDir %>/<%= pkg.name %>.min.js'
      }
    },
    sizediff: {
      all: {
        files: [
            '<%= dirs.distDir %>/<%= pkg.name %>.js',
            '<%= dirs.distDir %>/<%= pkg.name %>.min.js'
        ]
      }
    },
    jasmine: {
      all: ['<%= dirs.testDir %>/SpecRunner.html']
    },
    lint: {
      files: ['grunt.js']
    },
    watch: {
      files: '<config:coffee.nano.src>',
      tasks: 'default'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true
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
        command: 'marked -o src/demo/tmp/intro.html src/readme/intro.md'
      },
      mark_howto: {
        command: 'marked -o src/demo/tmp/howto.html src/readme/howto.md'
      },
      mark_methods: {
        command: 'marked -o src/demo/tmp/plugin_methods.html src/readme/plugin_methods.md'
      },
      mark_options: {
        command: 'marked -o src/demo/tmp/plugin_options.html src/readme/plugin_options.md'
      },
      mark_browser: {
        command: 'marked -o src/demo/tmp/browser_support.html src/readme/browser_support.md'
      },
      mark_build: {
        command: 'marked -o src/demo/tmp/build.html src/readme/build.md'
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

  grunt.registerTask('default', 'coffee:iosb min concat:unmin concat:min compass:iosb csslint lint sizediff yuidoc concat:readme');
  grunt.registerTask('build', 'default');
  grunt.registerTask('build:tests', 'coffee:test');
  grunt.registerTask('build:demo', 'coffee:demo compass:demo shell jade:demo concat:readme');
  grunt.registerTask('test', 'coffee:test jasmine');
  grunt.registerTask('size', 'sizediff');
};
