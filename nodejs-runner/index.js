

var Jasmine = require('../node_modules/jasmine');
var jasmine = new Jasmine();

jasmine.loadConfigFile('spec/support/jasmine.json');

/*jasmine.loadConfig({
    spec_dir: 'spec',
    spec_files: [
        'appSpec.js',
        'requests/!**!/!*[sS]pec.js',
        'utils/!**!/!*[sS]pec.js'
    ],
    helpers: [
        'helpers/!**!/!*.js'
    ]
});*/



jasmine.configureDefaultReporter({
    showColors: true,
    jasmineCorePath: this.jasmineCorePath
});



jasmine.execute();

