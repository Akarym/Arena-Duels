let GameManager = {
    setGameStart: function(fighterName) {
        this.resetFighter(fighterName);
        this.setPreFight();
    },
    resetFighter: function(fighterName) {
        switch (fighterName) {
            case "Nakart":
                player = new Fighter(fighterName, 600, 52, 44, 28, 32, 45);
                break;
            case "Koma":
                player = new Fighter(fighterName, 510, 38, 62, 18, 30, 60);
                break;
            case "Skeir":
                player = new Fighter(fighterName, 550, 48, 42, 26, 31, 50);
                break;
            case "Jess":
                player = new Fighter(fighterName, 470, 70, 20, 16, 30, 80);
                break;
            case "Beardboy":
                player = new Fighter(fighterName, 520, 42, 45, 22, 32, 42);
                break;
            case "Koren":
                player = new Fighter(fighterName, 624, 58, 36, 30, 34, 40);
                break;
            case "Zephyr":
                player = new Fighter(fighterName, 612, 56, 49, 26, 28, 70);
                break;
            case "Andrew":
                player = new Fighter(fighterName, 520, 63, 22, 24, 29, 55);
                break;
            case "Joshuchrist":
                player = new Fighter(fighterName, 540, 44, 56, 20, 30, 65);
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="img/' + fighterName + 
        '.png" class="img-player"><div><h3>' + fighterName + 
        '</h3><p class="health-player">Health: ' + player.health + '</p>' +
        '</h3><p>Attack Damage: ' + player.attackDamage + '</p>' +
        '</h3><p>Ability Power: ' + player.abilityPower + '</p>' +
        '</h3><p>Armor: ' + player.armor + '</p>' +
        '</h3><p>Magic Resist: ' + player.magicResist + '</p>' +
        '</h3><p>Speed: ' + player.speed + '</p></div>';
    },
    setPreFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");

        getHeader.innerHTML = '<p>Find an enemy</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy!</a>'
        getArena.style.visibility = "visible";
    },
    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");

        // Create enemy!
        fighterList = fighterList.filter(fighter => fighter !== player.fighterName);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(fighterList.length -1));
        let chosenEnemy = fighterList[chooseRandomEnemy];

        switch (chosenEnemy) {
            case "Nakart":
                enemy = new Fighter(chosenEnemy, 600, 52, 44, 28, 32, 45);
                break;
            case "Koma":
                enemy = new Fighter(chosenEnemy, 510, 38, 62, 18, 30, 60);
                break;
            case "Skeir":
                enemy = new Fighter(chosenEnemy, 550, 48, 42, 26, 31, 50);
                break;
            case "Jess":
                enemy = new Fighter(chosenEnemy, 470, 70, 20, 16, 30, 80);
                break;
            case "Beardboy":
                enemy = new Fighter(chosenEnemy, 520, 42, 45, 22, 32, 42);
                break;
            case "Koren":
                enemy = new Fighter(chosenEnemy, 624, 58, 36, 30, 34, 40);
                break;
            case "Zephyr":
                enemy = new Fighter(chosenEnemy, 612, 56, 49, 24, 28, 70);
                break;
            case "Andrew":
                enemy = new Fighter(chosenEnemy, 520, 63, 22, 24, 28, 55);
                break;
            case "Joshuchrist":
                enemy = new Fighter(chosenEnemy, 540, 44, 56, 20, 30, 65);
                break;
        }

        getHeader.innerHTML = '<p>Choose your movement</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="ArenaManager.playerMove()">Attack!</a>'
        getEnemy.innerHTML = '<img src="img/' + chosenEnemy + 
        '.png" class="img-enemy"><div><h3>' + chosenEnemy + 
        '</h3><p class="health-enemy">Health: ' + enemy.health + '</p>' +
        '</h3><p>Attack Damage: ' + enemy.attackDamage + '</p>' +
        '</h3><p>Ability Power: ' + enemy.abilityPower + '</p>' +
        '</h3><p>Armor: ' + enemy.armor + '</p>' +
        '</h3><p>Magic Resist: ' + enemy.magicResist + '</p>' +
        '</h3><p>Speed: ' + enemy.speed + '</p></div>';
    }
}