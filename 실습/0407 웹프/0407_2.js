let product= {
    number:273,
    string: 'djalkfjds',
    Bbolean : true,
    Array : [1,2,3,4],
    method: function(){
        console.log(`${this.string}`)
    }
};

product.method();
for(let key in product){
    console.log(`${key}: ${product[key]}`);
}