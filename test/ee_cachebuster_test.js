'use strict';
var grunt = require('grunt');
exports.ee_cachebuster = {
  custom_options: function (test) {
    var actual = grunt.file.read('test/tmp/template_file_test');
    var expected = grunt.file.read('test/expected/template_file_test');
    test.equal(actual, expected, 'Test output does not match expected');
    test.done();
  }
};