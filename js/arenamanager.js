let enemyAbility;
let attackAnimationTime = 3000;

let ArenaManager = {
    playerMove: function (playerAbility) {
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");
        let getActions = document.querySelector(".actions");
        let getHeader = document.querySelector(".header");
        let getArena = document.querySelector(".arena");
        
        getArena.style.backgroundImage = 'none';

        let clearCombatText = function () {
            getArena.innerHTML = '';
        }

        let disablePlayerMoves = function () {
            getActions.style.pointerEvents = 'none';
        }

        let enablePlayerMoves = function () {
            getActions.style.pointerEvents = 'auto';
        }

        let displayVictory = function () {
            getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="location.reload();">Play again!</a>';
            getHeader.innerHTML = '';
            clearCombatText();
            getArena.style.backgroundImage = "url('img/victory.png')";
            getActions.style.pointerEvents = 'auto';
        }

        let displayDefeat = function () {
            getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="location.reload();">Play again!</a>';
            getHeader.innerHTML = '';
            clearCombatText();
            getArena.style.backgroundImage = "url('img/defeat.png')";
            getActions.style.pointerEvents = 'auto';
        }

        let playerUseAbility = function () {
            switch (playerAbility) {
                case "Basic Attack":
                    return Abilities.BasicAttack(player);
                case "Convoke the Spirits":
                    return Abilities.ConvokeTheSpirits(player);
                case "Raging Blow":
                    return Abilities.RagingBlow(player);
            }
        }

        let enemyUseAbility = function () {
            var randomAbility = Math.floor(Math.random() * Math.floor(enemy.abilities.length));
            enemyAbility = enemy.abilities[randomAbility];
            switch (enemyAbility) {
                case "Basic Attack":
                    return Abilities.BasicAttack(enemy);
                case "Convoke the Spirits":
                    return Abilities.ConvokeTheSpirits(enemy);
                case "Raging Blow":
                    return Abilities.RagingBlow(enemy);
            }
        }

        let playerAttacks = function () {
            var damage = playerUseAbility();
            Animations.PlayerBasicAttack();
            Animations.EnemyDamageTaken();
            updateEnemyHealth(damage);
        }

        let enemyAttacks = function () {
            var damage = enemyUseAbility();
            Animations.EnemyBasicAttack();
            Animations.PlayerDamageTaken();
            updatePlayerHealth(damage); 
        }

        let updatePlayerHealth = function (damage) {
            player.health = player.health - damage;
            getArena.insertAdjacentHTML('beforeend', '<p><span class="fighter-name">' + enemy.fighterName + '</span> uso <span class="ability-text">' + enemyAbility + '</span></p>');
            getArena.insertAdjacentHTML('beforeend', '<p><span class="fighter-name">' + enemy.fighterName + '</span> te ha causado <span class="lost-health">' + damage + '</span> de daño</p>');
            if (player.health <= 0) {
                getPlayerHealth.innerHTML = 'Health: ' + 0;
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                displayDefeat();
            } else {
                getPlayerHealth.innerHTML = 'Health: ' + player.health + ' <span class="lost-health">(-' + damage + ')</span>';
            }
        }

        let updateEnemyHealth = function (damage) {
            enemy.health = enemy.health - damage;
            getArena.insertAdjacentHTML('beforeend', '<p><span class="fighter-name">' + player.fighterName + '</span> uso <span class="ability-text">' + playerAbility + '</span></p>');
            getArena.insertAdjacentHTML('beforeend', '<p><span class="fighter-name">' + player.fighterName + '</span> ha causado <span class="lost-health">' + damage + '</span> de daño</p>');
            if (enemy.health <= 0) {
                getEnemyHealth.innerHTML = 'Health: ' + 0;
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                displayVictory();
            } else {
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health + ' <span class="lost-health">(-' + damage + ')</span>';
            }
        }

        //Disable abilities so the player is not able to attack again while the round has not yet finished
        disablePlayerMoves();

        //Player attacks first
        if (getPlayerSpeed >= getEnemySpeed) {
            playerAttacks();
            setTimeout(function () {
                if (enemy.health > 0) {
                    enemyAttacks();
                    setTimeout(function () {
                        enablePlayerMoves();
                        clearCombatText();
                    }, attackAnimationTime)
                }
            }, attackAnimationTime)         
        }

        //Enemy attacks first
        else if (getEnemySpeed >= getPlayerSpeed) {           
            enemyAttacks();
            setTimeout(function () {
                if (player.health > 0) {
                    playerAttacks();
                    setTimeout(function () {
                        enablePlayerMoves();
                        clearCombatText();
                    }, attackAnimationTime)                       
                }
            }, attackAnimationTime)
        }      
    }
}
