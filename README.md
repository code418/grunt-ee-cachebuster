# grunt-ee-cachebuster  [![Dependency Status](https://david-dm.org/code418/grunt-ee-cachebuster.png)](https://david-dm.org/code418/grunt-ee-cachebuster) [![devDependency Status](https://david-dm.org/code418/grunt-ee-cachebuster/dev-status.png)](https://david-dm.org/code418/grunt-ee-cachebuster#info=devDependencies) [![Build Status](https://travis-ci.org/code418/grunt-ee-cachebuster.svg?branch=master)](https://travis-ci.org/code418/grunt-ee-cachebuster)

> Cachebuster for Expression Engine

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-ee-cachebuster --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-ee-cachebuster');
```

## The "ee_cachebuster" task

### Overview
In your project's Gruntfile, add a section named `ee_cachebuster` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  ee_cachebuster: {
  		example:{
	      options: {
	        templates: ['admin/expressionengine/templates/default_site/**/*'],
	        themefiles: ['themes/theme_directory/js/source/*.js', 'themes/theme_directory/js/min/*.js', 'themes/theme_directory/css/*.css'],
	        themefolder: 'themes/'
	      }
  		}
  },
});
```

### Options

#### options.templates
Type: `String` or `Array`
Default value: `[]`

The location of the template files you wish to search through and attach the cachebusting suffix

#### options.themefiles
Type: `String` or `Array`
Default value: `[]`

The location of files you want to cachebust

#### options.themefolder
Type: `String`
Default value: `themes/`

The location of theme folder

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
 * 2014-06-13   v0.0.1   Initial Release
 * 2014-06-22	v0.1.0   Multi-task with unit tests
