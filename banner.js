// banner

//store the quotations in arrays
b = new Array(7);
b[0] = '<a href="http://www.galacticempire.co.uk" target="_blank"><img src="banners/gal_emp.gif" border="0" alt="GalacticEmpire.co.uk"></a>';
b[1] = '<a href="http://www.theforce.net" target="_blank"><img src="banners/the_force.jpg" border="0" alt="TheForce.net"></a>';
b[2] = '<a href="http://www.ctrlaltdel-online.com" target="_blank"><img src="banners/ctrlaltdel.gif" border="0" alt="Ctrl Alt Del"></a>';
b[3] = '<a href="http://www.geocities.com/mysticzi" target="_blank"><img src="banners/zianne.gif" border="0" alt="Ziannes Realm"></a>';
b[4] = '<a href="http://www.leasticoulddo.com" target="_blank"><img src="banners/licd_banner.gif" border="0" alt="Least I Could Do"></a>';
b[5] = '<a href="http://www.njoe.com" target="_blank"><img src="banners/njoe.gif" border="0" alt="New Jedi Order Encyclopedia"></a>';
b[6] = '<a href="http://www.userfriendly.org" target="_blank"><img src="banners/userfriendly.gif" border="0" alt="User Friendly"></a>';



//calculate a random index
index = Math.floor(Math.random() * b.length);
//display the quotation
document.write(b[index]);
//done
