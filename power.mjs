function power(x, n){// x는 밑수 n은 지수

    if(n===0) return 1;
    return x*power(x,n-1);
}

console.log(power(2,5));