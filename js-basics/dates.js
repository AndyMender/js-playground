// by default in ISO8601 format and UTC timezone
const timeNow = new Date();
console.log(timeNow);

// 'Date' offers the complete API to datetime handling
// NOTE: Date passing as an ISO8601 string works. Individual parts as integers doesn't!
const timePast = new Date("2018-04-17");
console.log(timePast);
// Including output as String in human-readable format
console.log(timePast.toDateString());
console.log(timeNow.toTimeString());        // includes timezone and DST info!
// And ISO format
console.log(timeNow.toISOString());
