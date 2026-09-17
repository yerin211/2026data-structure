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

function DFS(vertex, visited_vertices={}) {
    visited_vertices[vertex.value] = true;
    console.log(`정점 : ${vertex.value}`);
    for (let adjacent of vertex.adjacent_vertices) {
        if (visited_vertices[adjacent.value ]=== true) {
            continue;
        } else {
            DFS(adjacent, visited_vertices)
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

DFS(ben);