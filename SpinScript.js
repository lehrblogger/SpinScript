// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: bicycle;

class Section {
  constructor(d) {
    this.verb = d['verb'];
    var hours_minutes = d['timestamp'].split(':');
    this.remaining_before_section = parseInt(hours_minutes[0]) * 60 + parseInt(hours_minutes[1]);
    if ('cadence' in d) {
      this.cadence = d['cadence'];
    } else {
      this.cadence = false;
    }
    if ('resistance' in d) {
      this.resistance = d['resistance'];
    } else {
      this.resistance = false;
    }
    if ('zone' in d) {
      this.zone = d['zone'];
    } else {
      this.zone = false;
    }
    if ('zone_mod' in d) {
      this.zone_mod = d['zone_mod'];
    } else {
      this.zone_mod = false;
    }
    if ('other' in d) {
      this.other = d['other'];
    } else {
      this.other = false;
    }
  }

  targets() {
    var text = `${this.verb}`;
    if (this.other) {
      text += ` ${this.other}`;
    }
    if (this.zone) {
      if (this.zone_mod) {
        text += ` in ${this.zone_mod} zone ${this.zone}`;
      } else {
        text += ` in zone ${this.zone}`;
      }
    }
    if (this.resistance) {
      text += ` with ${this.resistance} resistance`;
    }
    if (this.cadence) {
      text += ` at ${this.cadence} cadence`;
    }
    return text;
  }
  
  duration(remaining_after_section) {
    var delta = this.remaining_before_section - remaining_after_section;
    if (delta <= 50) {
      return `${this.roundXToNearestY(delta, 5)} seconds`;
    } else if (70 <= delta && delta <= 90) {
      return `${this.roundXToNearestY(delta, 5)} seconds`;
    } else {
      var minutes = this.roundXToNearestY(delta, 60) / 60;
      return minutes == 1 ? `1 minute` : `${minutes} minutes`;
    }
  }
  
  roundXToNearestY(x, y) {
    if ((x % y) >= y / 2) {
      return parseInt(x / y) * y + y; 
    } else {
      return parseInt(x / y) * y;
    }
  }
}

var data = {
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
      zone: 'redacted',
    }
  ]
}
// var data = {
//   url: 'redacted',
//   title: 'redacted',
//   instructor: 'redacted',
//   timetamp: 'redacted',
//   duration: 45,
//   sections: [
//     {
//       verb: `redacted`,
//       timestamp: '45:00',
//       cadence: 'redacted',
//       resistance: 'redacted',
//       zone: 'redacted',
//     }
//   ]
// }
// var data = {
//   url: 'redacted',
//   title: 'redacted',
//   instructor: 'redacted',
//   timetamp: 'redacted',
//   duration: 30,
//   sections: [
//     {
//       verb: `redacted`,
//       timestamp: '30:00',
//       cadence: 'redacted',
//       resistance: 'redacted',
//       zone: 'redacted'
//     }
//   ]
// }
var intro_duration = 60;
var ride_duration = data.duration * 60;
var sections = [];
if (data.sections.length > 62) {
  console.log(`Error: Only the first 62 of ${data.sections.length} sections can be scheduled.`);
  return;
}
for (var i = 0; i < data.sections.length; i++) {
  sections.push(new Section(data.sections[i]));
}
var start = new Date();

function scheduleNotification(title, body, seconds) {
  var notif = new Notification();
  notif.threadIdentifier = 'com.scriptable.spinscript'; 
  notif.title = title;
  notif.body = body;
  notif.setTriggerDate(new Date(start.getTime() + 5000 + (intro_duration + seconds) * 1000/* / 15*/));
  notif.schedule();
}

await Notification.removeAllPending();
scheduleNotification(`On your bike, tap now to start the ride's ${intro_duration}-second intro`,
                     `Next: ${sections[0].targets()}`,
                     -1 * intro_duration);
for (var i = 0; i < sections.length - 1; i++) {
  scheduleNotification(`${sections[i].targets()} for ${sections[i].duration(sections[i + 1].remaining_before_section)}`,
                       `Next: ${sections[i + 1].targets()}`,
                       ride_duration - sections[i].remaining_before_section);
};
scheduleNotification(`${sections[i].targets()} for ${sections[i].duration(0)}`,
                     `Next: Cool down and stretch`,
                     ride_duration - sections[i].remaining_before_section);
scheduleNotification(`Ride complete! Remember to cool down and stretch`,
                     ``,
                     ride_duration);
