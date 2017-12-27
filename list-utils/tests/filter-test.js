/// testing if FILTER is working fine or not


const docs = require('./fake-docs-list');

const funnels = {
  speciality: ['Gynacologist', 'Orthopedician', 'General Physician', 'Surgeon', 'Dentist'],
  exp: [
    {
      title: '0-5 years',
      lower: 0,
      upper: 5
    },
    {
      title: '5-10 years',
      lower: 5,
      upper: 10
    },
    {
      title: '10-15 years',
      lower: 10,
      upper: 15
    },
    {
      title: '15-20 years',
      lower: 15,
      upper: 20
    },
    {
      title: '20+ years',
      lower: 20,
      upper: 120
    },
  ],
  location: ['koramangala 1st Block', 'BTM Layout Petrol Pump', 'Indiranagar 100ft Road'],
};

const checkedFunnels = {
  speciality: [1],
  exp: [2, 3],
  location: [0, 2]
};

const filter = require('../filter');

console.log(
  "\nfilter parameters are as belows\n" +
  "\nspeciality : 'Orthopedician'" + 
  "\nexperience : '10-15 years' or '15-20 years'" + 
  "\nlocation   : 'koramangala 1st Block' or 'Indiranagar 100ft Road'\n\n")
console.log(filter(docs, funnels, checkedFunnels));

/// run this file in node to test the filter modeule
/// this is not some test-file using mocha or chai or enything else :)