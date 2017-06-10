'use strict';

var Michal ={
    imie:  'Michal',
    wzrost:  152,
    przedstawOsobe: function() {console.log (this.imie)}
}

var Krystian = {
    imie: "Krystian",
    wzrost: 180,
    przedstawOsobe: function() {console.log(this.imie)}
}

Michal.przedstawOsobe();
Krystian.przedstawOsobe();