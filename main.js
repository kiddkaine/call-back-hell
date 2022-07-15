function cancelVacation(message) {
	console.log('--- Cancel Vacation ---');
	console.log('Ответ на предыдущем шаге:', message);
	console.log('Отпуск отменяется :(');
}

function submitVacation(message) {
	console.log('--- Submit Vacation ---');
	console.log('Ответ на предыдущем шаге:', message);
	console.log('Едем в отпуск :)');
}

function checkRooms (success, failed) {
	setTimeout(() => {
		console.log('Проверяем номера в отеле...');

		const availableRooms = true;

		if (availableRooms) {
			let message = 'Номера есть!';
			success(message);
		} else {
			let message = 'Номеров нет.';
			failed(message);
		}
	}, 1000);
}

function checkTickets (message, success, failed) {
	setTimeout(() => {
		console.log('--- Function Check Tickets ---');
		console.log('Ответ на предыдущем шаге:', message);
		console.log('Проверяем номера в отеле...');

		const availableTickets = true;

		if (availableTickets) {
			let message = 'Билеты есть!';
			success(message);
		} else {
			let message = 'Билетов нет.';
			failed(message);
		}
	}, 500);
}

checkRooms((messageFromCheckRooms) => {
	checkTickets(messageFromCheckRooms, submitVacation, cancelVacation)
}, cancelVacation);