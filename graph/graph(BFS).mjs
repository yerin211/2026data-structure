import { Queue } from "./../Queue.mjs";

class Vertex {

    constructor(value) {
        this.value = value;
        this.adjacent_vertices = []; //방문한 곳을 넣는 해쉬 테이블
    }

    addAdjacentVertex(vertex) {
        this.adjacent_vertices.push(vertex);
    };

    removeAdjacentVerTex(vertex) {
        for (let i = 0; i < this.adjacent_vertices.length; i++) {
            if (this.addAdjacentVertex[i] == vertex) {
                this.addAdjacentVertex.splice(1, 1);
            }
        }

    }

} //class

function BFS(vertex) {
    let queue = new Queue();
    let visited_vertices = {}; //재귀호출이 아니라서 위에 파라미터로 안 줘도 됨
    visited_vertices[vertex.value] = true;
    queue.enqueue(vertex);

    while (queue.isEmpty() === false) {
        let currentVertex = queue.dequeue().data; //기준이 될 노드 큐에서 꺼내오기(얘를 기준으로 ajdsent를 돌거) shift
        console.log("정점 : " + currentVertex.value);
        for (let adjacent of currentVertex.adjacent_vertices) {
            if (visited_vertices[adjacent.value] == true) {
                continue;
            } else {
                visited_vertices[adjacent.value] = true;
                queue.enqueue(adjacent); //큐에 넣기

            }
        }
    }
}

let ben = new Vertex("Ben");
let ivy = new Vertex("Ivy");
let joy = new Vertex("Joy");
let jake = new Vertex("Jake");
let anna = new Vertex("Anna");
let david = new Vertex("David");
let elin = new Vertex("Elin");
let owen = new Vertex("Owen");

ben.addAdjacentVertex(ivy);
ben.addAdjacentVertex(jake);
ben.addAdjacentVertex(anna);
ben.addAdjacentVertex(david);

ivy.addAdjacentVertex(ben);
ivy.addAdjacentVertex(joy);

joy.addAdjacentVertex(ivy);
joy.addAdjacentVertex(jake);

jake.addAdjacentVertex(ben);
jake.addAdjacentVertex(joy);

anna.addAdjacentVertex(ben);

david.addAdjacentVertex(ben);
david.addAdjacentVertex(elin);

elin.addAdjacentVertex(david);
elin.addAdjacentVertex(owen);

owen.addAdjacentVertex(elin);

BFS(ben);