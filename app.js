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
		let timerName = this.nameOfTimer = document.querySelector('.countName').value;
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
		this.timerTitle = document.querySelector('.timerTitle');
	}

	printName(name){
		const alert = new Alert();

		//Checking if theres already a Title. If it is, show the alert;

		if(!this.timerTitle.innerHTML){
			this.timerTitle.innerHTML = name;
		} else {

			alert.showAlert('Theres already a timer going on!')
		}
	}

	printTimer(date, timerId){
		let now = new Date().getTime();
		let distance = date - now;

		// Checking if theres another timer going on. if it is, end it. Only allow one timer

		if(timerId !== 3){
			return clearInterval(timerId);
		}

		// Time calculations for days, hours, minutes and seconds
		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
		let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
		this.day.innerHTML = days;
		this.hour.innerHTML = hours;
		this.minute.innerHTML = minutes;
		this.second.innerHTML = seconds;

			if(now >= date){

				clearInterval(timerId);
				this.day.innerHTML = 'D';
				this.hour.innerHTML = 'O';
				this.minute.innerHTML = 'N';
				this.second.innerHTML = 'E';
			}
	}

	updateTimer(date){
			 let timerId = setInterval( () =>  {
						this.printTimer(date, timerId);
						console.log(timerId);
			}, 1000);
			return timerId;
	}
}

class Alert {
	constructor(){
		this.alertDiv = document.querySelector('.alerts');
	}
	showAlert(textAlert){
		const p = document.createElement('p');
		const textNode = document.createTextNode(textAlert);
		p.appendChild(textNode);
		setTimeout( () =>  { 
			this.alertDiv.removeChild(p);
		}, 2000);
		this.alertDiv.appendChild(p);
	}
}



new Trigger();
