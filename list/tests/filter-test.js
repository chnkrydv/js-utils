/// testing if filter working fine or not


let docs = [
  {
    id: 0,
    name: 'Dr Chandan',
    speciality: 'Dentist',
    exp: 1,
    location: 'koramangala 1st Block',
    time: '2:30-3:00',
    bookedAlready: true
  },


  {
    id: 1,
    name: 'Dr Man',
    speciality: 'General Physician',
    exp: 7,
    location: 'koramangala 1st Block',
    time: '10:00-11.00',
    bookedAlready: false
  },

  {
    id: 2,
    name: 'Dr Prashant Pathak',
    speciality: 'Orthopedician',
    exp: 11,
    location: 'koramangala 1st Block',
    time: '2:30-3:00',
    bookedAlready: false
  },

  {
    id: 3,
    name: 'Dr Jaya',
    speciality: 'Orthopedician',
    exp: 16,
    location: 'Indiranagar 100ft Road',
    time: '2:30-3:00',
    bookedAlready: false
  },

  {
    id: 4,
    name: 'Dr Swati',
    speciality: 'Dentist',
    exp: 12,
    location: 'BTM Layout Petrol Pump',
    time: '2:30-3:00',
    bookedAlready: false
  },

  {
    id: 5,
    name: 'Dr Gaurav B',
    speciality: 'General Physician',
    exp: 4,
    location: 'Indiranagar 100ft Road',
    time: '2:30-3:00',
    bookedAlready: false
  },

  {
    id: 6,
    name: 'Dr Harsha M',
    speciality: 'General Physician',
    exp: 19,
    location: 'Indiranagar 100ft Road',
    time: '2:30-3:00',
    bookedAlready: false
  },

  {
    id: 7,
    name: 'Dr S banerjee',
    speciality: 'Dentist',
    exp: 14,
    location: 'BTM Layout Petrol Pump',
    time: '2:30-3:00',
    bookedAlready: false
  },

  {
    id: 8,
    name: 'Dr Joseph',
    speciality: 'Orthopedician',
    exp: 1,
    location: 'BTM Layout Petrol Pump',
    time: '2:30-3:00',
    bookedAlready: false
  },

  {
    id: 9,
    name: 'Dr Ranjith B',
    speciality: 'Gynacologist',
    exp: 1,
    location: 'BTM Layout Petrol Pump',
    time: '2:30-3:00',
    bookedAlready: false
  },

  {
    id: 10,
    name: 'Dr P Biswas',
    speciality: 'Surgeon',
    exp: 1,
    location: 'Indiranagar 100ft Road',
    time: '2:30-3:00',
    bookedAlready: false
  },

  {
    id: 11,
    name: 'Dr KK Mohanty',
    speciality: 'Surgeon',
    exp: 1,
    location: 'Indiranagar 100ft Road',
    time: '2:30-3:00',
    bookedAlready: false
  }
];

let funnels = {
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

let checkedFunnels = {
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