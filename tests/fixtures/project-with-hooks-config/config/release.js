/* jshint node:true */
var RSVP = require('rsvp');
var fs = require('fs');
var path = require('path');

module.exports = {
  beforeCommit: function(project, versions) {
    return writeFile(project.root, 'before-commit.txt', versions.next);
  },
  afterCommit: function(project, versions) {
    return writeFile(project.root, 'after-commit.txt', versions.next);
  },
  beforeTag: function(project, versions) {
    return writeFile(project.root, 'before-tag.txt', versions.next);
  },
  afterTag: function(project, versions) {
    return writeFile(project.root, 'after-tag.txt', versions.next);
  },
  beforePush: function(project, versions) {
    return writeFile(project.root, 'before-push.txt', versions.next);
  },
  afterPush: function(project, versions) {
    return writeFile(project.root, 'after-push.txt', versions.next);
  }
};

function writeFile(rootPath, filePath, contents) {
  return new RSVP.Promise(function(resolve, reject) {
    fs.writeFile(
      path.join(rootPath, filePath),
      contents,
      resolve);
  });
}