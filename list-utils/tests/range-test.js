/// testing if RANGE is working fine or not

const docs = require('./fake-docs-list');

const range = require('../range');

console.log("\n\nrange of field: 'speciality'\n");
console.log(range(docs, 'speciality'));
console.log("\n\nrange of field: 'exp'\n");
console.log(range(docs, 'exp'));
console.log("\n\nrange of field: 'location'\n");
console.log(range(docs, 'location'));
console.log("\n\nrange of field: 'time'\n");
console.log(range(docs, 'time'));
console.log("\n\nrange of field: 'a wrong field which is not present in object'\n");
console.log(range(docs, 'fakeField'));

/// run this file in node to test the filter modeule
/// this is not some test-file using mocha or chai or enything else :)