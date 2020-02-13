class Trigger{
    constructor(){
        this.form = document.querySelector('.userInput');
        this.form.addEventListener('submit', this.main.bind(this));
    }
    main(event){
        event.preventDefault();
		UI.printValues(GetInput.getName());
		UI.updateTimer(GetInput.getTimer());
    }
}

class GetInput {
    static getName(){
		this.nameOfTimer = document.querySelector('.countName').value;
		let timerName = this.nameOfTimer;
 		return timerName;
	}
	static getTimer(){
		let newTimer = this.timer = document.querySelector('.userCount').value;
		// newTimer = new Date();
		console.log(Date.parse(newTimer))
		return Date.parse(newTimer);
	}
}

class UI{
	static printValues(name){
		this.timerTitle = document.querySelector('.timerTitle').innerHTML = name;
	}
	static updateTimer(date){
		let now = new Date().getTime();
		let distance = date - now;
		// Time calculations for days, hours, minutes and seconds
		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
		let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// select element
		document.querySelector('.day').innerHTML = days;
		document.querySelector('.hour').innerHTML = hours;
		document.querySelector('.minute').innerHTML = minutes;
		document.querySelector('.second').innerHTML = seconds;
		
	}
}


new UI();
new Trigger();
new GetInput();

// load event listeners
// loadEventListeners();

// function loadEventListeners() {
// 	document.addEventListener('DOMContentLoaded', function() { calcTime(); });
// };

//     var timeTo = document.getElementById('time-to').value,
//             date
//             ,now = new Date(),
// 			newYear = new Date('1.1.2020').getTime(),
// 			startTimer = '';

// calculate date, hour, minute and second
// function calcTime(dates) {
// 	//ui variables
// 	clearInterval(startTimer);

// 	if(typeof(dates) == 'undefined'){
// 		date = new Date(newYear).getTime();
// 	}else {
// 		date = new Date(dates).getTime();
// 	}

// 	function updateTimer(date){

// 		var now = new Date().getTime();
// 		var distance = date - now;

// 		// Time calculations for days, hours, minutes and seconds
// 		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
// 		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// 		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// 		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// 		// select element
// 		document.querySelector('.clock-day').innerHTML = days;
// 		document.querySelector('.clock-hours').innerHTML = hours;
// 		document.querySelector('.clock-minutes').innerHTML = minutes;
// 		document.querySelector('.clock-seconds').innerHTML = seconds;

// 		if(now >= date){
// 			clearInterval(startTimer);
// 			document.querySelector('.clock-day').innerHTML = 'D';
// 			document.querySelector('.clock-hours').innerHTML = 'O';
// 			document.querySelector('.clock-minutes').innerHTML = 'N';
// 			document.querySelector('.clock-seconds').innerHTML = 'E';
// 		}
// 	}

// 	startTimer = setInterval(function() { updateTimer(date); }, 1000);

// }

