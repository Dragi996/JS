//1. Написати програм којим се уноси и штампа целобројан низ А од 10 елемената
var A = [];

for (var i = 0; i < 10; i++) {
	var n = parseInt(prompt('unesi broj'));
    A[i] = n;
}
console.log(A);
//2. Написати програм којим се уноси n оцена једног студента и израчунава његов просек.

var n = parseInt(prompt('unesi broj ocena'));

var sum = 0;
var avg;
for (var i = 1; i <= n; i++) {
    var o = parseInt(prompt('unesi ocenu'));
    sum = sum + o;
    
    
}
	avg = sum / n;
    
console.log(avg);
//3. Написати програм којим се проналази минимални елемент низа и број његових понављања у низу.

var n = parseInt(prompt('unesi broj elemenata'));
var A = [];


for (var i = 0; i < n; i++) {
    var br = parseInt(prompt('unesi broj'));
    A[i] = br;

} console.log('niz je ' + A);
var min = A[0];
    
    for (var i = 1; i < n; i++) {
        if (A[i] < min) {
            min = A[i];
        
        }
}
console.log('minimum je: ' + min);
 var rt = 0;
for (var i = 0; i < n; i++) {
    if (min == A[i]) {
    	rt++;
    }
}console.log('ponavlja se: ' + rt);

//Написати програм који користећи функције штампа минимим и максимум низа као и њихове индексе (позиције).
var n = parseInt(prompt('unesi broj elemenata'));
A = [];

for (i = 0; i < n; i++){
    var br = parseInt(prompt('unesi broj'));
    A[i] = br;
}console.log('Niz je: ' + A);

function minimum(A) {
    var min = A[0];
    for (i = 1; i < n; i++) {
        if (A[i] < min) {
            min = A[i];
        }
    }
    return min;
} 

console.log('Minimalna vrednost je: ' + minimum(A,n));

function maximum(A) {
    var max = A[0]; 
    for (i = 1; i < n; i++){
        if (A[i] > max) {
            max = A[i];
        }
    }
    return max;
}
console.log('Maksimalna vrednost je: ' + maximum(A,n));

function IndexOfNumber(A, number){
    var result = "";
    for(var i = 0; i < A.length; i++){
        if(A[i] === number) {
            result = result + " "+ (i + 1);
        }
    }
    return result;
}
var m = maximum(A);
var mini = minimum(A);
console.log('pozicija maxa: ' + IndexOfNumber(A,m));
console.log('pozicija minimuma: ' + IndexOfNumber(A,mini));
