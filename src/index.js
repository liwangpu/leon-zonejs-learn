$(function () {
    $('#btnTest').click(funTest);
});

function funTest() {

    const taskId = `task ${+new Date()}`;
    console.time(taskId);

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


    // const myZone = Zone.fork
    console.log('title:',zone);
    console.timeLog(taskId);
}
