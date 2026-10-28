class WeightedGraphVertex {

    constructor(value) {
        this.value = value; //기준이 되는 노드
        this.adjacent_vertices = {}; //그 이웃들(값도 넣어야 해서 hashtable 키:값)
    }

    addAdjacentVertex(vertex, weight) {
        this.adjacent_vertices[vertex.value] = weight;
        //이웃과 값이 들어있는 집 이렇게 받아서 아까 만든 저기로 들어감
    }
    removeAdjacentVertex(vertex) {
        delete this.adjacent_vertices[vertex.value];
        //해시 테이블에 키:값 둘 다 지우기
    }
}

let seoul = new WeightedGraphVertex("서울");
let wonju = new WeightedGraphVertex("원주");
let gangneung = new WeightedGraphVertex("강릉");
let deajeon = new WeightedGraphVertex("대전");
let jeonju = new WeightedGraphVertex("전주");
let deagu = new WeightedGraphVertex("대구");

seoul.addAdjacentVertex(gangneung, 165);
seoul.addAdjacentVertex(wonju, 87);
seoul.addAdjacentVertex(deajeon, 140);
seoul.addAdjacentVertex(jeonju, 187);

console.log(seoul.adjacent_vertices);
seoul.removeAdjacentVertex(gangneung);
seoul.removeAdjacentVertex(jeonju);
console.log(seoul.adjacent_vertices);
// node .\graph\WeightedGraph.mjs