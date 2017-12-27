/// testing if SEARCH is working fine or not

const docs = require('./fake-docs-list');

const searchables = [ 'speciality', 'name' ];

const search = require('../search');

console.log("\nsearch query: 'th'\nsearchable fields: 'name' & 'speciality'\n");
console.log(search(docs, searchables, 'TH'));
console.log("\n\n\nsearch query: 'chand'\nsearchable fields: 'name' & 'speciality'\n");
console.log(search(docs, searchables, 'cHaNd'));

/// run this file in node to test the filter modeule
/// this is not some test-file using mocha or chai or enything else :)