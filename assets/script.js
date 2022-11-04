let delay = -0.4;
function createCard(date, day, games) {
	delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

function createMatch(player1, player2, time) {
  return `
    <li>
      <img src="./assets/flags/icon=${player1}.svg" alt="${player1}'s flag">
      <strong>${time}</strong>
      <img src="./assets/flags/icon=${player2}.svg" alt="${player2}'s flag">
    </li>
  `
}

document.querySelector('#cards').innerHTML = 
  createCard('24/11', 'segunda', createMatch('brazil', 'cameroon', '08:00') + createMatch('basque country', 'japan', '20:00') + createMatch('basque country', 'japan', '20:00')) +
  createCard('26/11', 'quarta', createMatch('basque country', 'japan', '20:00') + createMatch('basque country', 'japan', '20:00')) +
  createCard('28/11', 'sexta', createMatch('basque country', 'japan', '20:00')) +
  createCard('26/11', 'quarta', createMatch('basque country', 'japan', '20:00')) +
  createCard('26/11', 'quarta', createMatch('basque country', 'japan', '20:00')) + createCard('24/11', 'segunda', createMatch('brazil', 'cameroon', '08:00')) + createCard('24/11', 'segunda', createMatch('brazil', 'cameroon', '08:00') + createMatch('basque country', 'japan', '20:00') + createMatch('basque country', 'japan', '20:00')) + 
  createCard('24/11', 'segunda', createMatch('brazil', 'cameroon', '08:00') + createMatch('basque country', 'japan', '20:00') + createMatch('basque country', 'japan', '20:00'))
