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
  createCard('20/11', 'domingo', createMatch('qatar', 'ecuador', '13:00')) +
  
  createCard('21/11', 'segunda', createMatch('england', 'iran', '10:00') + createMatch('senegal', 'netherlands', '13:00') + createMatch('united states', 'wales', '16:00')) +
  
  createCard('22/11', 'terça', createMatch('argentina', 'saudi arabia', '07:00') + createMatch('denmark', 'tunisia', '10:00') + createMatch('mexico', 'poland', '13:00') + createMatch('france', 'australia', '16:00')) +
  
  createCard('23/11', 'quarta', createMatch('morocco', 'croatia', '07:00') + createMatch('germany', 'japan', '10:00') + createMatch('spain', 'costa rica', '13:00') + createMatch('belgium', 'canada', '16:00')) +
  
  createCard('24/11', 'quinta', createMatch('morocco', 'croatia', '07:00') + createMatch('germany', 'japan', '10:00') + createMatch('spain', 'costa rica', '13:00') + createMatch('belgium', 'canada', '16:00')) + 

  createCard('25/11', 'sexta', createMatch('morocco', 'croatia', '07:00') + createMatch('germany', 'japan', '10:00') + createMatch('spain', 'costa rica', '13:00') + createMatch('belgium', 'canada', '16:00')) +

  createCard('27/11', 'sábado', createMatch('morocco', 'croatia', '07:00') + createMatch('germany', 'japan', '10:00') + createMatch('spain', 'costa rica', '13:00') + createMatch('belgium', 'canada', '16:00'))

  // createCard('28/11', 'domingo', createMatch('morocco', 'croatia', '07:00') + createMatch('germany', 'japan', '10:00') + createMatch('spain', 'costa rica', '13:00') + createMatch('belgium', 'canada', '16:00')) +

  // createCard('29/11', 'segunda', createMatch('morocco', 'croatia', '07:00') + createMatch('germany', 'japan', '10:00') + createMatch('spain', 'costa rica', '13:00') + createMatch('belgium', 'canada', '16:00')) +

  // createCard('30/11', 'terça', createMatch('morocco', 'croatia', '07:00') + createMatch('germany', 'japan', '10:00') + createMatch('spain', 'costa rica', '13:00') + createMatch('belgium', 'canada', '16:00')) +

  // createCard('01/12', 'quarta', createMatch('morocco', 'croatia', '07:00') + createMatch('germany', 'japan', '10:00') + createMatch('spain', 'costa rica', '13:00') + createMatch('belgium', 'canada', '16:00')) +

  // createCard('02/12', 'quinta', createMatch('morocco', 'croatia', '07:00') + createMatch('germany', 'japan', '10:00') + createMatch('spain', 'costa rica', '13:00') + createMatch('belgium', 'canada', '16:00'))