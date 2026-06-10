import { double_LinkedLIst } from "./double_LinkedList.mjs";

class Deque{
    constructor() {
        this.list = new double_LinkedLIst();
    }

    printAll(){
        this.list.printAll();
    } 
    //- 모든 데이터 출력
    addFirst(data){
        this.list.insertAt(0, data);
    }
    removeFirst(){
        try{
            return this.list.deleteAt(0);
        }catch (e){
            return null;
        }
    }
    addLast(data){
        this.list.insertLast(data);
    }
    removeLast(data){
        try{
            return this.list.deleteLast(data);
        }catch (e){
            return null;
        }
    }
    isEmpty(){
        return (this.list.count==0);
    }
}

export {Deque};