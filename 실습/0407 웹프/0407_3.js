let product=[
    {name: '바나나', price: 1200},
    {name: '사과', price : 2000},
    {name: '배', price: 3000},
    {name: '수박', price : 5000}
    ];
    function print(product){
            console.log(`${product.name}의 가격은 ${product.price}원입니다.`);
    }
    
    for(let products of product){
        print(products);
    }