function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(getRandomInt(-3, 4))

const stops = [
    {
        name: 'Конная',
        time: 0
    },
    {
        name: 'Понтонная',
        time: 2
    },
    {
        name: '25 километр',
        time: 2
    },
    {
        name: '70 километр',
        time: 3
    },
    {
        name: '170 километр',
        time: 4
    }
];

// new Date(year, month, date, hours, minutes, seconds, ms)
let date = new Date(2023, 0, 17, 15);
let schedule = new Date(2023, 0, 17, 15);

console.log((schedule).toLocaleTimeString())
console.log(schedule)
let i = 0;
let charecter;

// let timer = setTimeout(go = () => {
    
//     charecter = (i == 0) ? 0 : getRandomInt(-1, 1);

//     schedule.setHours(schedule.getHours() + stops[i].time);
    
//     date.setHours(date.getHours() + stops[i].time);

//     date.setHours(date.getHours() + charecter);

//     console.log(`${stops[i].name}, время: ${date.toLocaleTimeString()}, ожидаемое время: ${schedule.toLocaleTimeString()}, характер: ${charecter}`);
//     i++;
//     if (i < stops.length) {
//         setTimeout(go, (stops[i].time + charecter) * 1200)
//     }
// }, (stops[i].time + charecter) * 1200)


