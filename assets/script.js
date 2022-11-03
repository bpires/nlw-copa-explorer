function createCard(date, day, games) {
	return `
    <div class="card">
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
      <img src="./assets/flags/icon=${player1}.svg" alt="">
      <strong>${time}</strong>
      <img src="./assets/flags/icon=${player2}.svg" alt="">
    </li>
  `
}

document.querySelector('#app').innerHTML = `
  <header>
    <img src="./assets/img/logo.svg" alt="logo da nlw copa" />
    <h1>CALENDÁRIO</h1>
  </header>

  <main id="cards">
    ${createCard('24/11', 'segunda', createMatch('brazil', 'cameroon', '08:00') + createMatch('basque country', 'japan', '20:00') + createMatch('basque country', 'japan', '20:00'))}
    ${createCard('26/11', 'quarta', createMatch('basque country', 'japan', '20:00'))}
    ${createCard('28/11', 'sexta', createMatch('basque country', 'japan', '20:00'))}
  </main>
`
