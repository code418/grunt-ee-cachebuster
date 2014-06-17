/*
 * grunt-ee-cachebuster
 * https://github.com/code418/grunt-ee-cachebuster
 *
 * Copyright (c) 2014 Richard Brown
 * Licensed under the MIT license.
 */
'use strict';
module.exports = function (grunt) {
  grunt.registerTask('ee_cachebuster', 'Cachebuster for Expression Engine', function () {
    var crypto = require('crypto');
    var options = this.options({
        templates: [],
        themefiles: [],
        themefolder: 'themes/'
      });
    var cacheBust = function (file, signature, templates) {
      var original = file;
      file = file.replace(options.themefolder, '{theme_folder_url}');
      var regfile = file.replace(/\./g, '\\.');
      regfile = regfile.replace(/\//g, '\\/');
      var fileregex = new RegExp(regfile + '[^\'"]*', 'g');
      var count = 0;
      for (var i = templates.length - 1; i >= 0; i--) {
        if (grunt.file.isFile(templates[i])) {
          var content = grunt.file.read(templates[i]);
          if (content.match(fileregex)) {
            count++;
            var newfile = file + '?v=' + signature;
            content = content.replace(fileregex, newfile);
            grunt.file.write(templates[i], content);
          }
        }
      }
      grunt.log.ok(original + ' updated in ' + count + ' files');
    };
    var md5 = function (filepath) {
      var hash = crypto.createHash('md5');
      hash.update(grunt.file.read(filepath));
      return hash.digest('hex');
    };
    var templateFiles = grunt.file.expand(options.templates);
    var jsFiles = grunt.file.expand(options.themefiles);
    var replaceArray = [];
    for (var i = jsFiles.length - 1; i >= 0; i--) {
      var sig = md5(jsFiles[i]);
      replaceArray[jsFiles[i]] = sig;
    }
    for (var item in replaceArray) {
      var cache = replaceArray[item];
      cacheBust(item, cache, templateFiles);
    }
  });
};