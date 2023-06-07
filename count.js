<!-- Original:  Alan Palmer -->
<!-- Web Site:  http://www.jsr.communitech.net -->
<!-- Begin
var date = new Date("August 22, 2001");
var description = "My Birthday (July 21)";
var now = new Date();
var diff = date.getTime() - now.getTime();
var days = Math.floor(diff / (1000 * 60 * 60 * 24));
document.write("<center><h3>")
if (days > 1) {
document.write(days+1 + ' days left until ' + description);
}
else if (days == 1) {
document.write("Only two days left until " + description);
}
else if (days == 0) {
document.write("It's nearly time for " + description);
}
else if (days == -1) {
document.write("IT'S MY BIRTHDAY!!!");
}
else {
document.write("You missed " + description + " this year.");
}
document.write("</h3></center>");
// End -->