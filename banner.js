// banner

//store the quotations in arrays
banner = new Array(6);
banner[0] = '<a href="http://www.galacticempire.co.uk" target="_blank" alt="GalacticEmpire.co.uk"><img src="banners/gal_emp.gif" border="0"></a>';
banner[1] = '<a href="http://www.theforce.net" target="_blank" alt="TheForce.net"><img src="banners/the_force.jpg" border="0"></a>';
banner[2] = '<a href="http://www.geocities.com/mysticzi" target="_blank" alt="Ziannes Realm"><img src="banners/zianne.gif" border="0"></a>';
banner[3] = '<a href="http://www.geocities.com/mysticzi" target="_blank" alt="Ziannes Realm"><img src="banners/zianne.gif" border="0"></a>';
banner[4] = '<a href="http://www.thedugout.net" target="_blank" alt="TheDugout.net"><img src="banners/the_dugout.gif" border="0"></a>';
banner[5] = '<a href="http://home.myway.com" target="_blank" alt="My Way"><img src="banners/my_way.gif" border="0"></a>';

//calculate a random index
index = Math.floor(Math.random() * banner.length);
//display the quotation
document.write('<P align="center" class="main">' + banner[index] + '</p>');
//done
