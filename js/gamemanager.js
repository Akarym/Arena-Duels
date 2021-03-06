let GameManager = {
    setGameStart: function(fighterName) {
        this.resetFighter(fighterName);
        this.setPreFight();
    },
    resetFighter: function(fighterName) {
        switch (fighterName) {
            case "Nakart":
                player = new Nakart(fighterName, 600, 52, 44, 28, 32, 45);
                break;
            case "Koma":
                player = new Koma(fighterName, 510, 38, 62, 18, 30, 60);
                break;
            case "Skeir":
                player = new Skeir(fighterName, 550, 48, 42, 26, 31, 50);
                break;
            case "Jess":
                player = new Jess(fighterName, 470, 70, 20, 16, 30, 80);
                break;
            case "Beardboy":
                player = new Beardboy(fighterName, 520, 42, 45, 22, 32, 42);
                break;
            case "Koren":
                player = new Koren(fighterName, 624, 58, 36, 30, 34, 40);
                break;
            case "Zephyr":
                player = new Zephyr(fighterName, 612, 56, 49, 26, 28, 70);
                break;
            case "Andrew":
                player = new Andrew(fighterName, 520, 63, 22, 24, 29, 55);
                break;
            case "Joshuchrist":
                player = new Joshuchrist(fighterName, 540, 44, 56, 20, 30, 65);
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
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(fighterList.length));
        let chosenEnemy = fighterList[chooseRandomEnemy];

        switch (chosenEnemy) {
            case "Nakart":
                enemy = new Nakart(chosenEnemy, 600, 52, 44, 28, 32, 45);
                break;
            case "Koma":
                enemy = new Koma(chosenEnemy, 510, 38, 62, 18, 30, 60);
                break;
            case "Skeir":
                enemy = new Skeir(chosenEnemy, 550, 48, 42, 26, 31, 50);
                break;
            case "Jess":
                enemy = new Jess(chosenEnemy, 470, 70, 20, 16, 30, 80);
                break;
            case "Beardboy":
                enemy = new Beardboy(chosenEnemy, 520, 42, 45, 22, 32, 42);
                break;
            case "Koren":
                enemy = new Koren(chosenEnemy, 624, 58, 36, 30, 34, 40);
                break;
            case "Zephyr":
                enemy = new Zephyr(chosenEnemy, 612, 56, 49, 24, 28, 70);
                break;
            case "Andrew":
                enemy = new Andrew(chosenEnemy, 520, 63, 22, 24, 28, 55);
                break;
            case "Joshuchrist":
                enemy = new Joshuchrist(chosenEnemy, 540, 44, 56, 20, 30, 65);
                break;
        }

        getHeader.innerHTML = '<p>Choose your movement</p>';

        let abilities = '';
        player.abilities.forEach(ability => {
            abilities = abilities + `<a href="#" class="player-ability" onclick="ArenaManager.playerMove('${ability}')">${ability}!</a>`
        }); 

        getActions.innerHTML = abilities;
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