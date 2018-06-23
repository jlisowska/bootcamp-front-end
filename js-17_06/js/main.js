// -------------- obiekty ------------------
//var advert = {
//    titl: "Poszukiwany Front End Developer",
//    descr: "Wymagane doświadczenie",
//    date: "2018-06-17",
//    disp: false,
//    showAdvert: function() {
//        if(this.disp == true) {
//            console.log(this.titl + "\n" + this.descr + "\n" + this.date);
//        } else {
//            console.log("Brak ogłoszenia");
//        }
//    }
//}
//
//advert.showAdvert();
//advert.disp = true;
//advert.showAdvert();
//
//advert.titl = "Sprzedam Opla";
//advert.descr = "ble ble";
//advert.showAdvert();

// klasy
//
//class Advert {
//    constructor(titl, descr, city, phone){
//        this.titl = titl;
//        this.descr = descr;
//        this.city = city;
//        this.phone = phone;
//    }
//    
//    getAdvert () {
//        var adv = this.titl + "\n" + this.descr + "\n" + this.city + "\n" + this.phone;
//        return adv;
//    }
//}
//
//var collection =[];
//
//var advertisementItem = new Advert("Sprzedam kota", "W łatki", "Warszawa", "667 556 836");
//console.log(advertisementItem);
////console.log(advertisement.getAdvert());
//collection.push(advertisementItem.getAdvert());
//console.log(collection);
//
//advertisementItem = new Advert("Wynajmę mieszkanie", "3 pokoje", "Warszawa", "667 556 836");
//console.log(advertisementItem);
////console.log(advertisement.getAdvert());
//collection.push(advertisementItem.getAdvert());
//console.log(collection);

//------------------- stałe matematyczne ----------------------
//var test = Math.cos(90)*(180/Math.PI);
//console.log(test); cos - radiany
//var zmienna1 = 1;
//var zmienna2 = 1; 
//
//console.log(zmienna1 && zmienna2 == true);
//
//// skrócona notacja if else!!!!!
//var var3 = (zmienna1 == true) ? "True" : "False";
//console.log(var3);


//for each do elementów tablicy
//var cars = ["red", "green", "yellow"];
//
//cars.forEach(function(tabItem, tabIndex) { 
//                  console.log(tabItem + ": " + tabIndex) 
//});

var jsonOsoby = {
    "osoby": [
        {
            imie: "Krystian", 
            nazwisko: "Dziopa", 
            wzrost: 180, 
            oczy: "niebieskie", 
            zainteresowania: [ 
                { nazwa: "podroze" }, 
                { nazwa: "gotowanie" }
            ] 
        },
        {
            imie: "Dominik",
            nazwisko: "Gomuła",
            wzrost: 170,
            oczy: "brązowe",
            zainteresowania: [
                { nazwa: "gotowanie" },
                { nazwa: "języki" }
            ]
        },
        {
            imie: "Claudia",
            nazwisko: "Żelazowska",
            wzrost: 167,
            oczy: "brązowe",
            zainteresowania: [
                { nazwa: "programowanie" },
                { nazwa: "podroze" },
                { nazwa: "języki" }
            ]

        }
    ]
}

console.log(jsonOsoby.osoby);

jsonOsoby.osoby.forEach(function(item, index){
    console.log("--------------");
    console.log("Imię " + item.imie + "\nNazwisko: " + item.nazwisko);
})