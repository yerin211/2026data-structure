import { double_LinkedLIst } from "./double_LinkedList.mjs";
//import (double_LinkedLIst)

class Queue{
    constructor(){
        this.list = new double_LinkedLIst();
    }
    enqueue(data){
        this.list.insertAt(0,data);
    }
    dequeue(){
        try {
            return this.list.deleteLast();//return 은 삭제 값을 받기 위해
        }catch(e){
            return null;
        }
    }
    front(){
        return this.list.tail;
    }
    isEmpty(){
        return (this.list.count===0);
    }

}
export {Queue};
