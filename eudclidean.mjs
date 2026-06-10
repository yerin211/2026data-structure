
function eucdlidean(num1,num2){
    if(num2==0) return;
    console.log(num2,num1%num2);
    eucdlidean(num2,num1%num2);
    
}
console.log (eucdlidean (78,66));

//const eucdlidean = function(num1,num2){
//    retrun (num2===0) ? num1 : eucdlidean(num2,num1%num2)   
//}
//console.log (eucdlidean (78,66));
//쌤이 푸신거

const eucdlidean = (num1,num2) => (num2===0) ? num1 : eucdlidean(num2,num1%num2)   
console.log (eucdlidean (78,66));
//errow function