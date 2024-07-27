let Price =[250, 645, 300, 900, 50];
console.log(`before offer`,Price);

for(let i=0 ; i<Price.length ; i++) {
    let offer = Price[i]/10;
    Price[i]= Price[i] - offer;
}

console.log(`after offer`, Price);
