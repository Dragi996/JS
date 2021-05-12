//1. Наћи производ непарних бројева од N до 150 (N<150).

var n = parseInt(prompt('unesi n'));
var sum = 1;
if (n <= 150) {
    for (var i = n; i <= 150; i++) {
        if (i % 2 != 0) {
            sum = sum * i;
        }
    }
    console.log('Proizvod neparnih brojeva je: ' + sum);
} else {
    console.log('n mora biti manje ili jednako od 150');
}

// 2. Колико има бројева од 50 до N (N>50) који су дељиви и са 2 и са 5?

var n = parseInt(prompt('unesi n'));
var br = 0;
if (n >= 50) {
    for (var i = 50; i <= n; i++) {
        if (i % 2 === 0 && i % 5 === 0) {
            br = br + 1;
        }
    }
    console.log(br);
} else {
    console.log('n mora biti vece od 50');
}

// 3. Наћи збир бројева од 1 до 100 који су дељиви са 6 или са 4 при чему бројеви од 30 до 55 не улазе у тај збир.

var sum = 0;

for (var i = 1; i <= 100; i++) {
    if ((i % 6 === 0 || i % 4 === 0) && (i <= 30 || i >= 55)) {
        sum = sum + i;
    }
}
console.log(sum);
// 4. Колико ће новца улагач имати након G година, ако је уложио D динара са годишњом каматом од P процената? 
// Камата се обрачунава на укупан износ који је „одлежао“ у претходној години.

var g = parseInt(prompt('godine'));
var d = parseInt(prompt('ulozeni dinari'));
var p = parseInt(prompt('kamata'));

for (i = 1; i <= g; i++) {
    d = (d + (p / 100) * d);
}
console.log(d);

//5. Наћи највећи број од N учитаних.

var n = parseInt(prompt('unesi n'));
var max;
for (var i = 1; i <= n; i++) {
    var br = parseInt(prompt('unesi broj'));
    if (i === 1) {
        max = br;
    } else {
        if (max < br) {
            max = br;
        }
    }


}
console.log(max);

// naci najmanji od n ucitanih 

var n = parseInt(prompt('unesi broj ucitavanja'));
var min;

for (i = 0; i <= n; i++) {
    var br = parseInt(prompt('unesi broj'));
    if (i === 1) {
        min = br;
    } else {
        if (min > br) {
            min = br;
        }
    }
} console.log(min);

// 7. Написати програм којим се сабирају сви парни бројеви од 20 до 80

var sum = 0;

for (var i = 20; i <= 80; i++) {
    if (i % 2 === 0) {
        sum = sum + i;
    }
}
console.log(sum);

// 8. Написати програм којим се уцитава N оцена неког студента и израцунава његова просечна оцена

var n = parseInt(prompt('Unesi broj ocena koliko ima student: '));
var sum = 0;
var avg;
for (var i = 1; i <= n; i++) {
    var ocena = parseInt(prompt("Unesi ocenu: "));
    sum = sum + ocena;
    avg = sum / n;
}

console.log("Prosecna ocena studenta je: " + avg);

// 9. Написати програм који ће исписати све бројеве од 1 до n, који су дељиви са 6 или са 7

var n = parseInt(prompt("unesi broj"));

for (var i = 1; i <= n; i++) {
    if (i % 6 === 0 || i % 7 === 0) {

        console.log(i);
    }
}
//10. Написати програм којим се одређује за колико година улог у банци од U динара уз годишњу камату од P% нарасте на R динара

var u = parseInt(prompt("Ulog u dinarima"));
var p = parseInt(prompt("Kamata "));
var r = parseInt(prompt("Konacna suma novca "));
var g = 0;
for (var i = u; i <= r; i = i + (i*p/100)) {
    g = g + 1;
}
console.log(g);

//11. Нацртати алгоритамску шему и написати програм којим се за N унетих целих бројева израчунава производ 
//позитивних и збир негативних бројева.
// Добијене резултате исписати на стандардном излазу

var n = parseInt(prompt('unesi broj cifara'));
var mult = 1;
var sum = 0;
for (i = 1; i <= n; i++) {
    var br = parseInt(prompt('unesi broj')) 
    if (br > 0) {
        mult = mult * br;
       
    }  
    else {
        sum = sum + br;
        
    }
}
console.log('Proizvod pozitivnih brojeva je: ' + mult);
console.log('Zbir negativnih brojeva je: ' + sum);