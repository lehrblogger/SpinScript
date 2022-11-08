### Background

If I want to watch and listen to my other content during Peloton rides, how can I know the current target cadence, resistance, and/or zone?

- The on-screen ranges help, but are not always accurate, and I haven't seen them for Power Zone rides (which I like most).
- Muting the bike and turning on ride subtitles almost works, but the instructors talk a lot, and it's hard to skim that while also paying attention to your cadence _and_ watching something else.

### Usage Notes

1. Create JSON data for your rides in `data/rides.js` as in the template object.
1. Download the [Sciptable iOS app](https://apps.apple.com/us/app/scriptable/id1405459188).
2. Make sure iCloud Drive is enabled on your Mac and iPhone/iPad.
3. Copy the project files (preserving the directory structure) into the Scriptable folder in iCloud Drive, or try the following command to copy them automatically: `cp -R ~/Documents/Projects/2021\ spinscript/* ~/Library/Mobile\ Documents/iCloud\~dk\~simonbs\~Scriptable/Documents/`. If there's an error about a missing `data/rides.js` file, trigger the download by opening that directory in the Files app on the iPhone or iPad, and try again.

You can use it on an iPhone and iPad at the same time, by simultaneously tapping to start the rides. This can be useful if you want to watch something on the iPad and a) feel vibrations on your Apple Watch with each notification, and b) see recent notifications on your iPhone lock screen without interrupting whatever you have on your iPad.

You can hang an iPad in front of your Peloton screen using something like [this on Etsy](https://www.etsy.com/listing/929643166/onton-for-peloton-bike-and-bike), and/or attach your phone to your handlebars with something like [this on Amazon](https://smile.amazon.com/gp/product/B078L18FTZ/).

### Future Improvements

- Add some default rides.
- Make the notifications less verbose.
- Use the iOS picture-in-picture or Live Activity APIs instead of notifications, to make it easier to see the current and next instruction.
