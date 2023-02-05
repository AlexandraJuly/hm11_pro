let numbers = prompt('Введите числа для создания массива через кому.','');

console.log(typeof numbers);
console.log(numbers);


let masS = numbers.split(',');

console.log(typeof masS);
console.log(masS);
let mas = masS.map(string => parseInt(string));

console.log(mas);

Array.prototype.sortBubble=function(){
for(var i=0, tmp;i<this.length-1;i++){
for(var j=0;j<this.length-1;j++){
    if(this[j]>this[j+1]){
        tmp=this[j];
        this[j]=this[j+1];
        this[j+1]=tmp;
    }
}
}
return this;
}
console.log( mas.sortBubble() );

var removed = mas.splice(1, 3);
console.log(mas);