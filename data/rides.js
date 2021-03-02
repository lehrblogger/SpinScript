var rides = [{
  url: 'redacted',
  title: 'redacted',
  instructor: 'redacted',
  timetamp: 'redacted',
  duration: 30,
  sections: [
    {
      verb: `redacted`,
      timestamp: '30:00',
      cadence: 'redacted',
      resistance: 'redacted',
      zone: 'redacted'
    }
  ]
}, {
  url: 'redacted',
  title: 'redacted',
  instructor: 'redacted',
  timetamp: 'redacted',
  duration: 45,
  sections: [
    {
      verb: `redacted`,
      timestamp: '45:00',
      cadence: 'redacted',
      resistance: 'redacted',
      zone: 'redacted'
    }
  ]
}, {
  url: 'redacted',
  title: 'redacted',
  instructor: 'redacted',
  timetamp: 'redacted',
  duration: 45,
  sections: [
    {
      verb: `redacted`,
      timestamp: '45:00',
      cadence: 'redacted',
      resistance: 'redacted',
      zone: 'redacted'
    }
  ]
}, {
  url: 'redacted',
  title: 'redacted',
  instructor: 'redacted',
  timetamp: 'redacted',
  duration: 30,
  sections: [
    {
      verb: `redacted`,
      timestamp: '30:00',
      cadence: 'redacted',
      resistance: 'redacted',
      zone: 'redacted'
    }
  ]
}];

module.exports.ride_names = () => {
  return rides.map(ride => `${ride.title} by ${ride.instructor}`)
}

module.exports.ride_data = (index) => {
  return rides[index];
}
