import days from "./data.json" with {type: 'json'}

document.getElementById('c-item-label-mon').innerText = days[0].day;
document.getElementById('c-item-label-tue').innerText = days[1].day;
document.getElementById('c-item-label-wed').innerText = days[2].day;
document.getElementById('c-item-label-thu').innerText = days[3].day;
document.getElementById('c-item-label-fri').innerText = days[4].day;
document.getElementById('c-item-label-sat').innerText = days[5].day;
document.getElementById('c-item-label-sun').innerText = days[6].day;

document.getElementById('mon-value').style.height = days[0].amount * 3 + 'px';
document.getElementById('tue-value').style.height = days[1].amount * 3 + 'px';
document.getElementById('wed-value').style.height = days[2].amount * 3 + 'px';
document.getElementById('thu-value').style.height = days[3].amount * 3 + 'px';
document.getElementById('fri-value').style.height = days[4].amount * 3 + 'px';
document.getElementById('sat-value').style.height = days[5].amount * 3 + 'px';
document.getElementById('sun-value').style.height = days[6].amount * 3 + 'px';

let maxValue = days[0].amount
let maxDay=days[0].day
let sumSpendings=0;
for (let day of days) {
    sumSpendings+=day.amount;
    if (day.amount > maxValue) { maxValue = day.amount; maxDay=day.day}
}

document.getElementById(maxDay+"-value").style.backgroundColor="hsl(186, 34%, 60%)";