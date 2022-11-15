export function timerAnime(time, second) {
    
    let timerQuery = document.querySelector('#timeCount');
    // timerQuery.style.color = 'black';
    let color = "blue";
    if (second <= 5) color = "red";

    if (time == 40) {
        timerQuery.style.background = `conic-gradient(
            #B0A4FA00 ${second * 9}deg,
            ${color} ${second * 14}deg
        )`;
    } else if (time == 20) {
        timerQuery.style.background = `conic-gradient(
            #B0A4FA00 ${second * 18}deg,
            ${color} ${second * 23}deg
        )`;
    } else {
        timerQuery.style.background = `conic-gradient(
            #B0A4FA00 ${second * 36}deg,
            ${color} ${second * 41}deg
        )`;
    }
}




// switch (time) {
//     case 40 :
//         timerQuery.style.background = conic-gradient(
//                                         #B0A4FA  ${second * 9}deg,
//                                         ${color} ${second * 14}deg);
//         break;
//     case 20 :
//         timerQuery.style.background = conic-gradient(
//                                         #B0A4FA  ${second * 9}deg,
//                                         ${color} ${second * 14}deg);
//         break;
//     case 10 :
//             timerQuery.style.background = conic-gradient(
//                                         #B0A4FA  ${second * 9}deg,
//                                         ${color} ${second * 14}deg);
//             break;
// }
