'use strict';

const path = require('path');
const test = require('ava');
const spies = require('chai-spies');
const chai = require('chai');
const expect = chai.expect;
chai.use(spies);
const Utils = require('@oligibson/bitmate-generator').TestUtils;

let context;

test.before(() => {
  context = Utils.mock('deploy');
  require('../../generators/deploy/index');
  process.chdir(path.resolve(__dirname, '../../'));
});

test('Update README.md with deploy context', () => {
  const spy1 = chai.spy.on(context, 'replaceInFileWithTemplate');
  Utils.call(context, 'writing', {server: 'express', client: 'react', docker: true});
  expect(spy1).to.have.been.called.exactly(1);
});
