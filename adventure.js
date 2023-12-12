//variables available to adventure
let packageCost;
let guideCost;
let package1;
let package2;
let package3;
let package4;
let GuideAdults;
let GuideKid;
let dynamic;
let dynamicGuide;
let dynamicPackage;

//TO DO 6b: get references to interactive elements for adventure
pkgChoices = document.getElementsByName("package");
gdeChoices = document.getElementsByName("guide");
txtNumberGuests = document.getElementById("numguests");
btnAdv = document.getElementById("orderadv");
txtCostdy = document.getElementById("dynamic");
txtCostguide = document.getElementById("dynamicGuide");
txtCostpackage = document.getElementById("dynamicPackage");
txtOutputAdventure = document.getElementById("outputadventure")
theForm = document.getElementById("BookAdventureForm");
//TO DO 6c: listen for events for adventure
window.addEventListener("load", init);
btnAdv.addEventListener("click", addToOrderAdv);
pkgChoices.forEach(item => 
    item.addEventListener("change", checkPackage));
gdeChoices.forEach(item => 
    item.addEventListener("change", checkGuide));

    function init() {
        packageCost = 0.00;
        guideCost = 0;
        package1 ="No  local adults package";
        package2 ="No local kids package";
        package3 ="No foreign adults package";
        package4 ="No foreign kids package";
        GuideAdults = "with a guide for adults";
        GuideKid = "Without a guide for kids";
        dynamic = packageCost + guideCost;
        dynamicGuide = guideCost;
        dynamicPackage = packageCost;
        txtCostpackage.innerText = `${dynamicPackage.toFixed(2)}`;
        txtCostguide.innerText = `${dynamicGuide.toFixed(2)}`;
        txtCostdy.innerText = `${dynamic.toFixed(2)}`;
    }


    function checkPackage(){
        if (this.value == "Ladults"){
            if (this.checked){
                packageCost += 5000;
                package1 = "Local adults";
            }
            else{
                packageCost -= 5000;
                package1 = "Local adults";
            }
        }
        else if (this.value == "Lkids"){
            if (this.checked){
                packageCost += 2000;
                package2 = "Local kids";
            }
            else{
                packageCost -= 2000;
                package2 = "Local kids";
            }
        }
        else if (this.value == "Fadults"){
            if (this.checked){
                packageCost += 10000;
                package3 = "Foreign adults";
            }
            else{
                packageCost -= 10000;
                package3 = "Foreign adults";
            }
        }
        else{
            if (this.checked){
                packageCost += 5000;
                package4 = "Foreign kids";
            }
            else{
                packageCost -= 5000;
                package4 = "Fkids";
            }
        }
        dynamic = packageCost + guideCost;
        dynamicGuide = guideCost;
        dynamicPackage = packageCost;
        txtCostpackage.innerText = `${dynamicPackage.toFixed(2)}`;
        txtCostguide.innerText = `${dynamicGuide.toFixed(2)}`;
        txtCostdy.innerText = `${dynamic.toFixed(2)}`;
    }
    

    
    function checkGuide() {
        if (this.value == "GuideAdults") {
            if (this.checked) {
                guideCost += 1000;
                GuideAdults = "with a guide for adults";
            } else {
                guideCost -= 1000;
                GuideAdults = "without a guide for adults";
            }
        } else {
            if (this.checked) {
                guideCost += 500;
                GuideKid = "With a guide for kids";
            } else {
                guideCost -= 500;
                GuideKid = "Without a guide for kids";
            }
        }
        dynamic = packageCost + guideCost;
        dynamicGuide = guideCost;
        dynamicPackage = packageCost;
        txtCostpackage.innerText = `${dynamicPackage.toFixed(2)}`;
        txtCostguide.innerText = `${dynamicGuide.toFixed(2)}`;
        txtCostdy.innerText = `${dynamic.toFixed(2)}`;
    }
    function addToOrderAdv(evt) {
        if (theForm.checkValidity()) {
            evt.preventDefault();
            let numHoodies = parseInt(txtNumberGuests.value);
            let total = numHoodies * (packageCost + guideCost);
            txtOutputAdventure.innerText +=  `${numHoodies} number of guests purchased \n${package1}(s), \n ${package2}(s), \n ${package3}(s),\n ${package4}(s) package(s), ${GuideAdults} and ${GuideKid},\n will cost LKR.${total.toFixed(2)}\n \n`;
        }
    }