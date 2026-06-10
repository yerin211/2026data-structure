class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;

    }
}

export class LinkedLIst{
    constructor(){
        this.head = null;
        this.count = 0;
    }

printAll(){
    let currentNode = this.head;
    let text = "[";
    while(currentNode != null){
        text += currentNode.data;
        currentNode = currentNode.next;
        if(currentNode!=null) text +=",";
    }
    text += "]";
    console.log(text);
}

clear(){
    this.head = null;
    this.count = 0;
}
insertAt(index, data){
    if( index<0 || index >= this.count){
        throw new Error("범위를 벗어났습니다");
    }
    let newNode = new Node(data);   
    //newNode 앞칸에 새로운 삽입
    if(index === 0 ){
        newNode.next = this.head;
        this.head = newNode;

    }else{
        let currentNode = this.head;
        for(let i =0;i<index-1;i++){
            currentNode = currentNode.next;
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }
    this.count++;
} //insertAt
insertAt(data){
    this.insertAt(this.count,data);
}
deleteAt(index){
     if( index<0 || index >= this.count){
        throw new Error("범위를 벗어났습니다");
    }

    let currentNode = this.head
    if(index===0){
        let deleteNode = this.head;
        this.head = this.head.next;
        this.count--;
        return deleteNode;
    }else{
        for(let i = 0;i<index-1;i++){
            currentNode = currentNode.next;
        }
        let deleteNode = currentNode.next;
        currentNode.next = currentNode.next.next;
        this.cout--;
        return deleteNode;
    }
}

getNodeAt(index){
    if( index<0 || index >= this.count){
        throw new Error("범위를 벗어났습니다");
    }
    let currentNode = this.head;
    for(let i=0;i<index;i++){
        currentNode = currentNode.next;
    }
    return currentNode;
}

deleteLast(){
    this.deleteAt(this.count-1);
}
} // LinkedList

export {Node}