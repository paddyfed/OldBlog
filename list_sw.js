// back button

document.write('<P ALIGN="CENTER"><input type="image" src="sys/sw_back.gif" onClick="history.go(-1)"></input></P><hr>');

// start list

document.write('<H4 align="center">Featured Sections</H4>');

document.write('<a href="tenerife2001" class="sw">Tenerife 2001</a><BR><BR>');

document.write('<a href="jabba" class="sw">The Plots of Jabba\'s Palace</a><BR><BR>');

// Quick links

document.write('<hr><H4 align="center">Quick Links</H4>');

document.write('<a href="college_first_sub.html" class="sw">First Year Subjects</a><BR><BR>');

document.write('<a href="main_starwars_films.html" class="sw">Star Wars Films</a><BR><BR>');

document.write('<a href="college_sec_sub.html" class="sw">Second Year Subjects</a><BR><BR>');

document.write('<a href="college_third_sub.html" class="sw">Third Year Subjects</a><BR><BR><hr>');

lastmod = document.lastModified

moddate = new Date(lastmod)

lastmoddate = Date.parse(lastmod)

if(lastmoddate == 0)
{
	document.write('<h4 align="center">Last Modified: UNKNOWN</h4>');
}
else
{
	dateday = moddate.getDate()

	if(dateday < 10)
	{
		dateday = '0' + dateday
	}
	
	datemonth = moddate.getMonth() + 1
	
	if(datemonth != '12' && datemonth != '11' && datemonth != '10')
	{
		datemonth = '0' + datemonth
	}
		
	dateyear = moddate.getYear()
	
	if(dateyear >= 100  && dateyear < 1900)
	{
		dateyear -= 100
		dateyear = '0' + dateyear
	}
	
	//dateday = 'helpp'
	//datemonth = 'dfsfdd'
	//dateyear = 'gljlajg'
	
	document.write('<h4 align="center">Last Modified: ' + dateday + '/' + datemonth + '/' + dateyear + '</h4>');
}
