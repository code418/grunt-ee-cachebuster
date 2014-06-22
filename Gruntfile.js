/*
 * grunt-ee-cachebuster
 * https://github.com/code418/grunt-ee-cachebuster
 *
 * Copyright (c) 2014 Richard Brown
 * Licensed under the MIT license.
 */
'use strict';
module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: { jshintrc: '.jshintrc' }
    },
    fixmyjs: {
      options: { jshintrc: '.jshintrc' },
      tasks: {
        files: [{
            expand: true,
            cwd: 'tasks/',
            src: ['*.js'],
            dest: 'tasks/'
          }]
      },
      tests: {
        files: [{
            expand: true,
            cwd: 'test/',
            src: ['*.js'],
            dest: 'test/'
          }]
      },
      grunt: {
        files: [{
            expand: true,
            cwd: '',
            src: ['Gruntfile.js'],
            dest: ''
          }]
      }
    },
    clean: { test: ['test/tmp'] },
    copy: {
      test: {
        files: [{
            cwd: 'test/source/',
            src: '*',
            dest: 'test/tmp',
            expand: true
          }]
      }
    },
    ee_cachebuster: {
      default_options: { options: {} },
      custom_options: {
        options: {
          templates: ['test/tmp/*'],
          themefiles: ['tasks/*.js'],
          themefolder: 'tasks/'
        }
      }
    },
    nodeunit: { tests: ['test/*_test.js'] }
  });
  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');
  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-fixmyjs');
  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', [
    'clean',
    'copy',
    'ee_cachebuster',
    'nodeunit'
  ]);
  // By default, lint and run all tests.
  grunt.registerTask('default', [
    'fixmyjs',
    'jshint',
    'test'
  ]);
};