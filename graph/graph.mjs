class Vertex {

    constructor(value) {
        this.value = value;
        this.adjacent_vertices = [];
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

let jake = new Vertex("Jake");
let ben = new Vertex("ben");
let joy = new Vertex("joy");
let ivy = new Vertex("ivy");
let elin = new Vertex("elin");
let anna = new Vertex("Anna");
let david = new Vertex("davvid");

jake.addAdjacentVertex(ben);
ben.addAdjacentVertex(jake);
joy.addAdjacentVertex(ben);
joy.addAdjacentVertex(ivy);
ivy.addAdjacentVertex(joy);
ivy.addAdjacentVertex(ben);
elin.addAdjacentVertex(ivy);
elin.addAdjacentVertex(anna);
anna.addAdjacentVertex(ben);
anna.addAdjacentVertex(david);
anna.addAdjacentVertex(elin);
david.addAdjacentVertex(anna);

console.log(anna.adjacent_vertices);
anna.removeAdjacentVerTex(david);
console.log(anna.adjacent_vertices);