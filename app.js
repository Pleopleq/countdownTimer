class Trigger{
    constructor(){
        this.form = document.querySelector('.userInput');
        this.form.addEventListener('submit', this.main.bind(this));
    }
    main(event){
		event.preventDefault();

		const input = new GetInput();
		const Ui = new UI();

		const time = input.getTimer();
		const nameOfTimer = input.getName();

		Ui.printName(nameOfTimer);
		Ui.printTimer(time);
		Ui.updateTimer(time);
		
    }
}

class GetInput {
    getName(){
		this.nameOfTimer = document.querySelector('.countName').value;
		let timerName = this.nameOfTimer;
 		return timerName;
	}
	getTimer(){
		let newTimer = this.timer = document.querySelector('.userCount').value;
		return Date.parse(newTimer);
	}
}

class UI{
	constructor(){
		this.day = document.querySelector('.day');
		this.hour = document.querySelector('.hour');
		this.minute = document.querySelector('.minute');
		this.second = document.querySelector('.second');
	}
	printName(name){
		this.timerTitle = document.querySelector('.timerTitle').innerHTML = name;
	}
	printTimer(date){
		let now = new Date().getTime();
		let distance = date - now;
		let startTimer = '';
		// Time calculations for days, hours, minutes and seconds
		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
		let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// select element
		this.day.innerHTML = days;
		this.hour.innerHTML = hours;
		this.minute.innerHTML = minutes;
		this.second.innerHTML = seconds;

		if(now >= date){
			clearInterval(startTimer);
			this.day.innerHTML = 'D';
			this.hour.innerHTML = 'O';
			this.minute.innerHTML = 'N';
			this.second.innerHTML = 'E';
		}

	}
	updateTimer(date){
		let startTimer = setInterval( () =>  { 
			this.printTimer(date);
		}, 1000);
	}
}

new Trigger();