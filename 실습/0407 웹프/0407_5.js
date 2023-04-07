let array=[
{name: '토마토', price : 1000},
{name: '수박', price:500}, 
{name:'포도', price:400}
];

let popped=array.pop();
console.log(popped);
console.log(array);
array.push(popped);
array.push({
    name:'사과',
    price:5000,
});

