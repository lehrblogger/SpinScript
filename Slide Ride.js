// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: red; icon-glyph: bicycle;

class Section {
  constructor(timestamp, zone, cadence_low, cadence_high, resistance_low, resistance_high) {
    this.timestamp = timestamp;
    this.zone = zone;
    this.cadence_low = cadence_low;
    this.cadence_high = cadence_high;
    this.resistance_low = resistance_low;
    this.resistance_high = resistance_high;
  }

  body() {
    var cadence_str = this.cadence_low == this.cadence_high ?
                                          this.cadence_low :
                                          `${this.cadence_low} - ${this.cadence_high}`;
    var resistance_str = this.resistance_low == this.resistance_high ?
                                          this.resistance_low :
                                          `${this.resistance_low} - ${this.resistance_high}`;
    return `Zone ${this.zone}, Cadence ${cadence_str}, Resistance ${resistance_str}`;
  }
}

var ride_duration = 1; // minutes
var ride_sections = [new Section(0, 1, 90, 90, 25, 35),
                new Section(5000, 2, 60, 70, 35, 45)];

var start = new Date();
var delay = 2000;

for (var i = 0; i < ride_sections.length; i++) {
  var notif = new Notification();
  var section_milliseconds = (ride_duration * 60 * 1000) - ride_sections[i].timestamp;
  if (i < ride_sections.length - 1) {
    section_milliseconds = ride_sections[i + 1].timestamp - ride_sections[i].timestamp;
  }
  section_minutes = section_milliseconds / (1000 * 60);
  notif.title = `Ride for ${section_minutes} mins`;
  notif.body = ride_sections[i].body();  //TODO put all info in title and use this for up next
  notif.setTriggerDate(new Date(start.getTime() + ride_sections[i].timestamp + delay));
  notif.schedule();
};
