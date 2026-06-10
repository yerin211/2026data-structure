//for문을 이용해서 패
//function factorial(n){
//    let sum =1;
//    for(let i=1;i<=n;i++){
//            sum *= i;
//    }
//    return sum;
//}

function factorial(n){
    let sum = 1;
    if(n>5) return console.log(sum);
    sum *= n;
    factorial(n-1);
}

factorial(5);