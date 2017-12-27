/// testing if SORT is working fine or not

const docs = require('./fake-docs-list');

const sort = require('../sort');

console.log("\n\nsort field: 'exp'\nsort order: NO-SORT_ORDER\n");
console.log(sort(docs, 'exp'));
console.log("\n\nsort field: 'name'\nsort order: NO-SORT_ORDER\n");
console.log(sort(docs, 'name'));
console.log("\n\nsort field: 'exp'\nsort order: ASC\n");
console.log(sort(docs, 'exp', true));
console.log("\n\nsort field: 'exp'\nsort order: DESC\n");
console.log(sort(docs, 'exp', false));

/// run this file in node to test the filter modeule
/// this is not some test-file using mocha or chai or enything else :)