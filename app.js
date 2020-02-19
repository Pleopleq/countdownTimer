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
		const [nameOfTimer, counter] = input.getName();

		Ui.printName(nameOfTimer, counter);
		Ui.printTimer(time);
		Ui.updateTimer(time, nameOfTimer);
		
    }
}

class GetInput {
    getName(){
		let i = 0;
		let timerName = this.nameOfTimer = document.querySelector('.countName').value;
		 return [timerName, i++ ];
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
	printName(name, counter){
		if(!counter < 2){
			this.timerTitle.innerHTML = name;
		}
	}
	printTimer(date, timerId){
		let now = new Date().getTime();
		let distance = date - now;
		if(timerId !== 3){
			return clearInterval(timerId);
		}
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

new Trigger();
