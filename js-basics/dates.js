// 'Date' offers the complete API to datetime handling
// NOTE: Date passing as an ISO8601 string works. Individual parts as integers doesn't!
const timePast = new Date("2018-04-17");
console.log("Time in the past - pure output:", timePast);

// by default in ISO8601 format and UTC timezone
const timeNow = new Date();
console.log("Time now - pure output:", timeNow);

// Including output as String in human-readable format
console.log("Time now - date string:", timeNow.toDateString());
console.log("Time now - time string:", timeNow.toTimeString());         // includes timezone and DST info!
console.log("Time now - locale string:", timeNow.toLocaleString());     // uses system timezone and system locale by default!
// And ISO format
console.log("Time now - ISO8601 string:", timeNow.toISOString());


function timeInTimezone(date_object, timezone) {
    return date_object.toLocaleString('en-US', { timeZone: timezone });
}

// NOTE: Invalid timezones trigger an exception - no silent defaulting to the system locale/timezone
const timezones = [
    'Europe/Berlin',
    'Asia/Tokyo',
    'Africa/Lagos',
];
for (let timezone of timezones)  {
    console.log(`Time now in ${timezone} - locale string:`, timeInTimezone(timeNow, timezone));
}
