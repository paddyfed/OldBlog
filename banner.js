// banner

//store the quotations in arrays
banner = new Array(8);
banner[0] = '<a href="http://www.galacticempire.co.uk" target="_blank"><img src="banners/gal_emp.gif" border="0" alt="GalacticEmpire.co.uk"></a>';
banner[1] = '<a href="http://www.theforce.net" target="_blank"><img src="banners/the_force.jpg" border="0" alt="TheForce.net"></a>';
banner[2] = '<a href="http://www.ctrlaltdel-online.com" target="_blank"><img src="banners/ctrlaltdel.gif" border="0" alt="Ctrl Alt Del"></a>';
banner[3] = '<a href="http://www.geocities.com/mysticzi" target="_blank"><img src="banners/zianne.gif" border="0" alt="Ziannes Realm"></a>';
banner[4] = '<a href="http://www.thedugout.net" target="_blank"><img src="banners/the_dugout.gif" border="0" alt="TheDugout.net"></a>';
banner[5] = '<a href="http://www.leasticoulddo.com" target="_blank"><img src="banners/least.gif" border="0" alt="Least I Could Do"></a>';
banner[6] = '<a href="http://www.njoe.com" target="_blank"><img src="banners/njoe.gif" border="0" alt="New Jedi Order Encyclopedia"></a>';
banner[7] = '<a href="http://www.hbstories.com" target="_blank"><img src="banners/hbstories.jpg" border="0" alt="HB Stories"></a>';



//calculate a random index
index = Math.floor(Math.random() * banner.length);
//display the quotation
document.write('<P align="center" class="main">' + banner[index] + '</p>');
//done
