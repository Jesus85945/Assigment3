let sub = prompt ("Please enter subtotal"); //10

let grat = prompt("Please enter gratuity rate"); //15

let gratuity = +sub * (+grat/+100);

let total = +sub + +gratuity;


alert (" gratuity is " + "" + "$"+gratuity );
alert ("Total is " + "" + "$"+(total));



