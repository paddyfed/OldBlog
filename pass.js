<!-- Original:  Lefteris Haritou --> 
<!-- Web Site:  lef@writeme.com> www.geocities.com/~lef -->

<!-- This script and many more are available free online at -->
<!-- The JavaScript Source!! http://javascript.internet.com -->

<!-- Begin
var base= new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
var pass=""
var z=23;
var y=28;
var f= new Array();
var K= new Array();
for (x=0; x<10; x++){
f[x]=x<<9
f[x]+=23
}
for (x=10; x<36; x++){
y=y<<1
v= Math.sqrt(y)
v = parseInt(v,16)
v+=5
f[x]=v
y++
}
for (x=36; x<62; x++){
z=z<<1
v= Math.sqrt(z)
v = parseInt(v,16)
v+=74
f[x]=v
z++
}
var iCounter = 3 //How many retries
function inc(){
iCounter--
if (iCounter > 0)
{
if (confirm("\nPassword is incorrect.\n\n\n\nRetry?"))
Check()
else
alert('Password incorrect.');
location.href='denied.hml';

//history.go(-1);

// You may use this element istead if you want.
// location.href='denied.html' //Cancel html file

}
else
alert('Your three tries are up.  Access Denied.');
location.href='denied.html';

// history.go(-1);

// You may use this element istead if you want.
// location.href='denied.html' // 3 times incorrect html file

}
function Check(){
pass = prompt("Enter your password.","")
if(pass==null || pass==""){
history.go(-1)}
else{
var lpass=(pass.length)+1
for (l=1; l<lpass; l++){
K[l]=pass.charAt(l)
}
var code=0;
for (y=1; y<lpass; y++){
for(x=0; x<62; x++){
if (K[y]==base[x]){
code+=f[x]
code*=y
      }
   }
}

<!-- STEP TWO: Put access code here!  -->
if (code==10994697) 		// code==[your access code]

go()
else
inc()
   }
}
function go(){
location.href=pass+".html";
}

document.write('<A HREF="javascript:Check()">Enter the password protected site.</A>');

// End -->

