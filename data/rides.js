var rides = [{
  url: 'sample',
  title: 'sample',
  custom_title: 'sample',
  instructor: 'sample',
  timestamp: 'sample',
  duration: 30,
  sections: [
    {
      verb: `sample`,
      timestamp: '30:00',
      cadence: 'sample',
      resistance: 'sample',
      zone: 'sample'
    }
  ]
}];

module.exports.ride_names = () => {
  return rides.map(ride => `${ride.custom_title ? ride.custom_title : ride.title} by ${ride.instructor.split(' ')[0]}`);
}

module.exports.ride_data = (index) => {
  return rides[index];
}
