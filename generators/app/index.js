'use strict';

const bitmate = require('@oligibson/bitmate-generator');

module.exports = bitmate.Base.extend({
  writing() {
    this.copyTemplate(
      'README.md',
      'README.md',
      this.options
    );
  }
});
