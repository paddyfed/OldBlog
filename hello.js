// declare variables

var first,second,third,fourth,fifth;
var last,slast,tlast,folast,filast;

// initialise variables

first = '<a href="college.html" class="menu">College</a>';
second = '<a href="main_starwars.html" class="menu">Main / Star Wars</a>';
third = '<a href="main.html" class="menu">Main</a>';
fourth = '<a href="college_first_sub.html" class="menu">College / First Year / Subjects</a>';
fifth = '<a href="college_links.html" class="menu">College / Links</a>';

filast = '<a href="college.html" class="menu">College</a>';
folast = '<a href="main_starwars.html" class="menu">Main / Star Wars</a>';
tlast = '<a href="main.html" class="menu">Main</a>';
slast = '<a href="college_first_sub.html" class="menu">College / First Year / Subjects</a>';
last = '<a href="college_links.html" class="menu">College / Links</a>';

// display variables

document.write("<p>The 5 most visited sections of the site:</p>");
document.write("<p>" + first + "<br>");
document.write(second + "<br>");
document.write(third + "<br>");
document.write(fourth + "<br>");
document.write(fifth + "</p>");

document.write("<hr>");

document.write("<p>The 5 least visited sections of the site:</p>");
document.write("<p>" + filast + "<br>");
document.write(folast + "<br>");
document.write(tlast + "<br>");
document.write(slast + "<br>");
document.write(last + "</p>");
