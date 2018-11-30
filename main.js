var check = "nope";

function validate() {
    var button = document.getElementById('button');
    button.innerHTML = "refresh";
    // location = location;
    var nameEntered = document.querySelector("#nameEntered").value;
    var email = document.querySelector("#emailEntered").value;
    var hotel = document.querySelector("#hotels").value;
    var days = document.querySelector("#days").value;
    console.log(hotel);
    
    if(nameEntered == null || nameEntered == "" || nameEntered == " ") {
        location = location;
        alert("Please enter a valide name.");
        return
    }

    var maybe = ValidateEmail(email);
    if(maybe == false) {
        location = location;
        return;
    }

    numberOfDays = Number(days);
    console.log(numberOfDays);
    console.log(typeof(numberOfDays));
    if(numberOfDays == "") {
        alert("Please enter a valid mount of days you want to visit the hotel.");
        location = location;
        return
    }
    calculate(nameEntered, email, hotel, numberOfDays);
    
}

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function calculate(nameEntered, email, hotel, days) {
    var chosenHotel = "";
    var hotelprice = 0;
    if(hotel == "two") {
        hotelprice = 365.00;
        chosenHotel = "Two Oceans";
    } else if (hotel == "random") {
        chosenHotel = "Just a Hotel";
        hotelprice = 4000.00;
        
    } else {
        hotelprice = 190000;
        chosenHotel = "The Really Expensive Hotel"
    }
    total = hotelprice * days;
    if(check != "nope"){
        location = location;
        return;
    }
    showResults(chosenHotel, hotelprice, email, total, days);

    removeResults(chosenHotel, hotelprice, email, total, days);
}


function showResults(chosenHotel, hotelprice, email, total, days) {
    document.querySelector(".text").append("Thank you for using TRAVEL-MASTER");
    document.querySelector(".text1").append("Staying at ");
    document.querySelector(".text2").append(" for ");
    document.querySelector(".text3").append(" days will cost you R");
    document.querySelector(".text4").append(" in total at R");
    document.querySelector(".text5").append(" per night. ");
    document.querySelector(".text6").append("Further information will be sent to: ");
     
    // document.querySelector(".text").append(Staying at <span class="hotelResult"></span> for <span class="daysResult"></span>days, will cost you R<span class="totalCostResult"></span> in total at <span class="perNightResult"></span> per night.);
    document.querySelector(".hotelResult").append(chosenHotel);
    document.querySelector(".daysResult").append(days);
    document.querySelector(".totalCostResult").append(total);
    document.querySelector(".perNightResult").append(hotelprice);
    document.querySelector(".email").append(email);

    check = "yup";

    newButton();
   
    
}

function newButton() {
    var link = document.createElement('button');
    link.setAttribute('onclick', 'refresh()');
    var txt = document.createTextNode("Refresh");
    var parents = document.querySelector('button');
    var parent = document.querySelector('newButton');
    parent.insertAfter(link, parent.firstChild);
    parents.insertBefore(txt, parent.lastChild);
    

    // var link = document.createElement('button');
    // link.setAttribute('onclick', 'refresh()');
    // var parent = document.getElementById('div');
    // parent.insertAfter(link, parent.firstChild);
}