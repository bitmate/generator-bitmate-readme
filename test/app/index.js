'use strict';
const path = require('path');
const test = require('ava');
const Utils = require('@oligibson/bitmate-generator').TestUtils;

let context;

test.before(() => {
  context = Utils.mock('app');
  require('../../generators/app/index');
  process.chdir(path.resolve(__dirname, '../../'));
});

test.beforeEach(() => {
  context.copyTemplate['README.md'] = null;
});

test('Copy README.md', t => {
  Utils.call(context, 'writing', {server: 'express', client: 'react', modules: 'webpack', css: 'scss', js: 'babel'});
  t.true(context.copyTemplate['README.md'].length > 0);
});
