// quotes

//store the quotations in arrays
quotes = new Array(5);
quotes[0] = "PaddyFedoo - who gets more SPAM than regular e-mails";
quotes[1] = "PaddyFedoo - who want's to know why nobody ever suspects Jessica Fletcher";
quotes[2] = "PaddyFedoo - who doesn't use Sprite in the Fish Tank";
quotes[3] = "PaddyFedoo - who doesn't use Sprite on snake bites";
quotes[4] = "PaddyFedoo - Inbox: 0, Junk Mail: 28.";

//calculate a random index
index = Math.floor(Math.random() * quotes.length);

//display the quotation
document.write(quotes[index]);

//done
