var submitOrder = function () {

    var name = document.querySelector("input[type=text]").value;
    var drink = document.querySelector("select option:checked").value;
    var size = document.querySelector("input[type=radio]:checked").value;
    var quantity = document.querySelector("input[type=number]").value;
    var subtotal = Number(drinks[drink].price) * Number(size);
    var total = Number(subtotal) * Number(quantity);

    document.querySelector("#receipt").innerHTML = "<h3>Receipt</h3><br/>" + name + " ordered " + quantity + " " + drinks[drink].make + " @ $" + subtotal + "<br/> TOTAL DUE: $" + total;

}

var drinks = [{ make: "Tea", price: 3 },
{ make: "Coffee", price: 2 },
{ make: "Wine", price: 5 },
{ make: "Beer", price: 5 }];

function toggleDisplay() {
    var x = document.getElementById("hiddenQuery");
    var displaySetting = x.style.visibility;
    var selected = document.getElementById("drinkselector").value;

    if (selected == '2' || selected == '3') {
            
            x.style.visibility = 'visible';
    } else {
            
            x.style.visibility = 'hidden';
    }
    
}

function isOld() {
    var age = document.getElementById("age").value;
    var twentyOne = moment().subtract(21, 'years').format("MM/DD/YYYY");

    if (age == "" && document.getElementById("hiddenQuery").style.visibility == 'visible') {
        document.querySelector("#receipt").innerHTML = "<h4>Please enter a valid birth date.</h4>";

    } else if (moment(age).isSameOrAfter(twentyOne) == false) {
       submitOrder();
        
    } else {
        document.querySelector("#receipt").innerHTML = "<h4>Must be born before</h4><br/>" + moment().subtract(21, 'years').format("dddd, MMM Do, YYYY");
    }
    document.getElementById('receipt').className = 'receipt';
}

window.onload = function () {

    document.querySelector("#submitorder").onclick = submitOrder;
    document.querySelector("#submitorder").onclick = isOld;
    
}