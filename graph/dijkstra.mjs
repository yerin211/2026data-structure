class City {
    constructor(name) {
        this.name = name;
        this.adjacent_cities = {};
    }
    addAdjacentCity(city, distance) {
        this.adjacent_cities[city.name] = distance;
    }
    removeAdjacentCity(city) {
        delete this.adjacent_cities[city.name];
    }
}


class Dijkstra {

}

let seoul = new City("서울");
let wonju = new City("원주");
let gangneung = new City("강릉");
let deajeon = new City("대전");
let jeonju = new City("전주");
let deagu = new City("대구");

//서울 연결
seoul.addAdjacentCity(wonju, 87);
seoul.addAdjacentCity(gangneung, 165);
seoul.addAdjacentCity(deajeon, 140);
seoul.addAdjacentCity(jeonju, 187);

//원주 연결
wonju.addAdjacentCity(seoul, 87);
wonju.addAdjacentCity(gangneung, 95);
wonju.addAdjacentCity(deajeon, 118);
wonju.addAdjacentCity(deagu, 178);

//강릉 연결
gangneung.addAdjacentCity(seoul, 165);
gangneung.addAdjacentCity(wonju, 95);
gangneung.addAdjacentCity(deagu, 212);

//대전 연결
deajeon.addAdjacentCity(seoul, 140);
deajeon.addAdjacentCity(wonju, 118);
deajeon.addAdjacentCity(jeonju, 156);
deajeon.addAdjacentCity(deagu, 122);

//전주 연결
jeonju.addAdjacentCity(seoul, 187);
jeonju.addAdjacentCity(deajeon, 56);
jeonju.addAdjacentCity(deagu, 130);

//대구 연결
deagu.addAdjacentCity(wonju, 178);
deagu.addAdjacentCity(gangneung, 212);
deagu.addAdjacentCity(deajeon, 122);
deagu.addAdjacentCity(jeonju, 130);