class Job {
    constructor(jobName, startTime, endTime) {
        this.jobName = jobName;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}//Job

class intervalScheduler {
    constructor() {
        this.jobs = [];
    }

    addJob(job) {
        this.jobs.push(job);
    }

    intervalScheduling() {

        //this.jobs.sort(function (a, b) { return a.endTime - b.endTime });

        this.jobs.sort((a, b) => a.endTime - b.endTime);
        let result = [];
        for (let currentajob of this.jobs) {
            if (result.length === 0) result.push(currentajob);
            else if (result[result.length - 1].endTime <= currentajob.startTime) {
                result.push(currentajob);
            }
        }
        console.log(result);
    }
}

let a = new Job("A", 0, 6);
let b = new Job("B", 1, 4);
let c = new Job("C", 3, 6);
let d = new Job("D", 3, 8);
let e = new Job("E", 4, 7);
let f = new Job("F", 5, 9);
let g = new Job("G", 6, 10);
let h = new Job("H", 8, 11);

let IntervalScheduler = new intervalScheduler();
IntervalScheduler.addJob(a);
IntervalScheduler.addJob(b);
IntervalScheduler.addJob(c);
IntervalScheduler.addJob(d);
IntervalScheduler.addJob(e);
IntervalScheduler.addJob(f);
IntervalScheduler.addJob(g);
IntervalScheduler.addJob(h);


