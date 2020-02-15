class Trigger{
    constructor(){
        this.form = document.querySelector('.userInput');
        this.form.addEventListener('submit', this.main.bind(this));
    }
    main(event){
        event.preventDefault();
		UI.printName(GetInput.getName());
		UI.printTimer(GetInput.getTimer());
		UI.updateTimer(UI.printTimer)
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
	static printName(name){
		this.timerTitle = document.querySelector('.timerTitle').innerHTML = name;
	}
	static printTimer(date){
		let now = new Date().getTime();
		let distance = date - now;
		let startTimer = '';
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

		if(now >= date){
			clearInterval(startTimer);
			document.querySelector('.day').innerHTML = 'D';
			document.querySelector('.hours').innerHTML = 'O';
			document.querySelector('.minutes').innerHTML = 'N';
			document.querySelector('.seconds').innerHTML = 'E';
		}

	}
	static updateTimer(date){
		let startTimer = setInterval( () =>  { 
			this.printTimer(date);
		}, 1000);
	}
}


new UI();
new Trigger();
new GetInput();

