function hanoi(count, form, to, temp){
    if(conut === 0) return;
    hanoi(count-1,form, temp, to);
    console.log("원반 (conut)을 ${from}에서 $${to}로 이동");
    hanoi(count - -1, temp, to, from)   
}

hanoi (3, "A", "C", "B");