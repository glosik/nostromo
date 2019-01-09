const replace = require('replace-in-file');
const packageJSON = require("./package.json");
const buildVersion = packageJSON.version;
const d = new Date();
const buildDate = [d.getMonth() + 1, d.getDate(), d.getFullYear()].join('-') + ' ' +
    [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
const options = {
  files: 'src/environments/version.ts',
  from: [/appVersion: '(.*)'/g, /buildDate: '(.*)'/g],
  to: ["appVersion: '"+ buildVersion + "'", "buildDate: '"+ buildDate + "'"],
  allowEmptyPaths: false,
};

try {
  let changedFiles = replace.sync(options);
  if (!changedFiles) {
    throw "Please make sure that file '" + options.files + "' has \"version: ''\"";
  }
  console.log('Build version set: ' + buildVersion);
  console.log('Build Date set: ' + buildDate);
}
catch (error) {
  console.error('Error occurred:', error);
  throw error
}
