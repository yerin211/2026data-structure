import {LinkedList} from "./LinkedList.mjs";

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);

// node1.next = node2;
// node2.next = node3;

// console.log(node1.data);
// console.log(node1.next.data);
// console.log(node1.next.next.data);

let list = new LinkedList();
console.log("===== insertAt() =====");
list.insertAt(0,0);
list.insertAt(1,1);
list.insertAt(2,2);
list.insertAt(3,3);
list.insertAt(4,4);
//list.insertAt(2,99);
list.printAll();

// console.log("");
// console.log("===== clear() =====");
// list.clear();
// list.printAll();

// console.log("");
// console.log("===== insertLast() =====");
// list.insertLast(99);
// list.insertLast(100);
// list.insertLast(101);
// list.printAll();

// console.log("");
// console.log("===== deleteAt() =====");
// list.deleteAt(0);
// list.deleteAt(3);
// list.printALl();


console.log("");
console.log("===== deleteLast() =====");
list.deleteLast();
list.printAll();

console.log("");
console.log("===== getNodeAt() =====");
let secondNode = list.getNodeAt(0);
console.log(secondNode.data)