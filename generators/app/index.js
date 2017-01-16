'use strict';

const bitmate = require('bitmate-generator');

module.exports = bitmate.Base.extend({
  writing() {
    this.copyTemplate(
      'README.md',
      'README.md',
      this.options
    );
  }
});
