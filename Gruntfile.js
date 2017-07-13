
/*!
 * @description Grunt@!!!!!
 */

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> v<%= pkg.version %>, <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/app.js',
        dest: 'js/app.min.js'
      }
    },
    jshint: {
      options: {
        browser: true,
        globals: {
          jQuery: true
        }
      },
      all: {
        files: {
          src: ['js/src/**/*.js']
        }
      }
    },
    concat: {
      options: {
      },
      dist: {
        src: [
          'js/vendor/less.min.js',
          'js/script.js',
          //'js/src/app.js',
          //'js/src/controllers/SiteController.js',
        ],
        dest: 'js/app.js'
      }
    },
    less: {
      development: {
        options: {
          paths: ['less'],
          yuicompress: false
        },
        files: {
          'css/style.css': ['less/style.less']
        }
      }
    },
    cssmin: {
      compress: {
        files: {
          'css/style.min.css': ['css/style.css']
        }
      }
    },
    watch: {
      scripts: {
        files: ['Gruntfile.js','js/src/**/*.js','js/vendor/**/*.js'],
        tasks: ['jshint','concat','uglify'],
        options: {
          debounceDelay: 250
        }
      },
      less: {
        files: 'less/**/*.less',
        tasks: ['less','cssmin'],
        options: {
          debounceDelay: 250
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['jshint','concat','uglify','less','cssmin','watch']);

};

/* EOF */