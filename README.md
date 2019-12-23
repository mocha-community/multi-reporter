[![npm version](https://badge.fury.io/js/%40mochajs%2Fmulti-reporter.svg)](https://badge.fury.io/js/%40mochajs%2Fmulti-reporter)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# @mochajs/multi-reporter
Multiple reporter for Mocha

## Installation
```sh
$ npm i -D @mochajs/multi-reporter
```

## Usage
Use `--reporter` in your test command.

```json
{
  "scripts": {
    "test": "mocha --reporter @mochajs/multi-reporter"
  }
}
```

Or, add `reporter` to your configuration file.

```json
{
  "reporter": "@mochajs/multi-reporter"
}
```

Create `.reporters.json` file.

```json
{
  "spec": true,
  "xunit": {
    "output": "report.xml"
  }
}
```

## Options
### config
By default, it will use `.reporters.json` as config file. To use other file, use `--reporter-options` in your test command.

```json
{
  "scripts": {
    "test": "mocha --reporter @mochajs/multi-reporter --reporter-options config=filename.json"
  }
}
```

Or, add `reporter-option` to your configuration file.

```json
{
  "reporter": "@mochajs/multi-reporter",
  "reporter-option": [
    "config=filename.json"
  ]
}
```
