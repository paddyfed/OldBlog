//clone wars 3 countdown

var today = new Date;
var Future0 = new Date;
ThisYear = 2005;

var FutureMonth = 2;
var FutureDate = 21;
var faraevent = "Clone Wars Season 3";

Future0.setMonth(FutureMonth, FutureDate);
Future0.setFullYear(ThisYear);

today1 = Date.parse(today);
future1 = Date.parse(Future0);
secleft = future1 - today1;
miliday = 24 * 60 * 60 * 1000;
daysleft = secleft/miliday;
daysleftint = Math.round(daysleft);

if (daysleftint > 1)
document.write(daysleftint, " days left until ", faraevent , "! ");
else if (daysleftint == 1)
document.write(faraevent, " is tomorrow! ");
else if (today1 == future1)
document.write(faraevent, " is today! ");