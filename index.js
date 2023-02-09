const buttons = document.querySelectorAll('button');
const [pauseBtn, resetBtn, startBtn] = buttons;
const secondsUi = document.querySelector('.seconds');

let seconds = 0;
let timerId = null;
const DELAY = 1000;

const disableButton = (...elem) =>
	elem.forEach((item) => item.setAttribute('disabled', 'disabled'));

const enableButton = (...elem) =>
	elem.forEach((item) => item.removeAttribute('disabled', 'disabled'));

const startTimer = () => {
	timerId = setInterval(() => (secondsUi.textContent = ++seconds), DELAY);
	disableButton(startBtn);
	enableButton(pauseBtn, resetBtn);
};

const stopTimer = () => {
	clearInterval(timerId);
	disableButton(pauseBtn);
	enableButton(startBtn, resetBtn);
};

const resetTimer = () => {
	clearInterval(timerId);
	secondsUi.textContent = seconds = 0;
	disableButton(pauseBtn, resetBtn);
	enableButton(startBtn);
};

pauseBtn.onclick = stopTimer;
resetBtn.onclick = resetTimer;
startBtn.onclick = startTimer;
