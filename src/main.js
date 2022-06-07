import 'zone.js';

// console.log('title:', Object.keys(Zone.current));

const taskId = `task ${+new Date()}`;
// console.time(taskId);

const person = {
    name: '小明',
    age: 18,
    eat: () => {
        console.log('start eating');
        setTimeout(() => {
            console.log('eating finish');
        }, 1500);
    },
    drink: () => {
        console.log('start drinking');
        setTimeout(() => {
            console.log('drinking finish');
        }, 1500);
    }
};



const executeContext = () => {
    person.eat();
    person.drink();
};

var myZoneSpec = {
    // onHasTask(delegate, current, target, hasTaskState) {
    //     console.log(hasTaskState.change);          // "macroTask"
    //     console.log(hasTaskState.macroTask);       // true
    //     console.log(JSON.stringify(hasTaskState));
    // },
    onScheduleTask(delegate, currentZone, targetZone, task) {
        const result = delegate.scheduleTask(targetZone, task);
        const name = task.callback.name;
        console.log(
            Date.now(),
            `task with callback '${name}' is added to the task queue`
        );
        return result;
    },
    onInvokeTask(delegate, currentZone, targetZone, task, ...args) {
        const result = delegate.invokeTask(targetZone, task, ...args);
        const name = task.callback.name;
        console.log(
            Date.now(),
            `task with callback '${name}' is removed from the task queue`
        );
        return result;
    }
};

const myZone = Zone.current.fork(myZoneSpec);

myZone.run(executeContext);

// console.timeLog(taskId);