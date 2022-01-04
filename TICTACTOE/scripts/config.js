function openPlayerConfig(event){
    const playerId = +event.target.dataset.playerid;
    editedPlayer = playerId;
    PlayerConfig.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig() {
  PlayerConfig.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove('error');
  errorOutput.textContent = '';
  formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const playerName = formData.get('playername').trim();

    if(!playerName){ 
        event.target.firstElementChild.classList.add('error');
        errorOutput.textContent = 'Please enter a valid input!';
        return;
    }

    const updatedPlayer = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayer.children[1].textContent = playerName;

    players[editedPlayer - 1].name = playerName;

    closePlayerConfig();
}

