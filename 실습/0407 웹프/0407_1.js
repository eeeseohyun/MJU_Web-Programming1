let product = {
    제품명 : '7D 건조 망고',
    유형 : '당절임',
    성분 : '망고, 설탕,메타중야황산나트륨,치자황색소',
    원산지 : '필리핀',
    print : function(){
        console.log(`${this.제품명}의 원산지는 ${this.원산지}입니다.`)
    }
};

console.log(product);
console.log(product.제품명);

for(let key in product){
    console.log(`${key}: ${product[key]}`);
}

product.print();