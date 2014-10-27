'use strict';

var grunt = require('grunt');
var child_process = require('child_process');

exports.gocompile = {
    basic: function(test) {
        test.expect(1);

        var proc = child_process.execFile('./basic', [], {
            cwd: 'test/tmp/'
        }, function() {
            var expect = grunt.file.read('test/expected/basic');
            var result = grunt.file.read('test/tmp/basic_out');
            test.equal(expect, result, 'should compile and run go program');

            test.done();
        });
    },
    goarch1: function(test) {
        test.expect(1);

        var proc = child_process.exec("file goarch1", {
            cwd: 'test/tmp/'
        }, function(error, stdout, stderr) {
            var expect = '386';
            var result = stdout;

            test.equal(true, result.indexOf(expect) > -1, 'should compile and run go program with associated goarch - "'+result+'".indexOf('+expect+')');
            test.done();
        });
    },
    goarch2: function(test) {
        test.expect(1);

        var proc = child_process.exec("file goarch2", {
            cwd: 'test/tmp/'
        }, function(error, stdout, stderr) {
            var expect = '64';
            var result = stdout;

            test.equal(true, result.indexOf(expect) > -1, 'should compile and run go program with associated goarch - "'+result+'".indexOf('+expect+')');
            test.done();
        });
    }
};