'use strict';

const bitmate = require('@oligibson/bitmate-generator');

module.exports = bitmate.Base.extend({
  writing() {
    this.replaceInFileWithTemplate(
      'deploy.md',
      'README.md',
      /## Issues & Support/,
      this.options
    );
  }
});
