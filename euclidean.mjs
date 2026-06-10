function euclidean(a,b){
    let temp;

    while(b!=0){
        temp=a%b;
        a=b;
        b=temp;
    }

    return a;

}
console.log(euclidean(1012,24));


