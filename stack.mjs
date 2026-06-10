import {LinkedList} from './LinkedList.mjs';

class Stack{
    construtor(){
        this.list = new LinkedList();
    }

    push(data){
        this.list.insertAt(0,data);
    }

    pop(){
        try{
            return this.list.deleteAt(0);
        }catch{
            return null;
        }
        return this.list.deleteAt(0);
    }

    peek(){
        return this.list.getNodeAt(0);
    }

    isEmpty(){
        return this.list.count(0);
    }
}

