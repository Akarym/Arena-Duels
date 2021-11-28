let ArenaManager = {
    playerMove: function () {

        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");
        let getActions = document.querySelector(".actions");
        let getHeader = document.querySelector(".header");

        let displayVictory = function () {
            getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="location.reload();">Play again!</a>';
            getHeader.innerHTML = '<h1>Victory</h1>';
            alert("Has ganado, gg easy. Refresca o dale al boton de play again para jugar otra vez.");
        }

        let displayDefeat = function () {
            getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="location.reload();">Play again!</a>';
            getHeader.innerHTML = '<h1 class="defeat-header">Defeat</h1>';
            alert("Has perdido, malisimo xD! Refresca o dale al boton de play again para jugar otra vez.");
        }

        let playerAttacks = function () {
            var damage = Abilities.BasicAttack(player);
            Animations.PlayerBasicAttack();
            Animations.EnemyDamageTaken();
            updateEnemyHealth(damage);
        }

        let enemyAttacks = function () {
            var damage = Abilities.BasicAttack(enemy);
            Animations.EnemyBasicAttack();
            Animations.PlayerDamageTaken();
            updatePlayerHealth(damage); 
        }

        let updatePlayerHealth = function(damage) {
            player.health = player.health - damage;
            alert("Has sido atacado por " + enemy.fighterName + " y te ha causado " + damage + " de daño.");
            if (player.health <= 0) {
                getPlayerHealth.innerHTML = 'Health: ' + 0;
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                displayDefeat();
            } else {
                getPlayerHealth.innerHTML = 'Health: ' + player.health + ' <strong class="lost-health">(-' + damage + ')</strong>';
            }
        }

        let updateEnemyHealth = function (damage) {
            enemy.health = enemy.health - damage;
            alert("Has atacado a " + enemy.fighterName + " y le has causado " + damage + " de daño.");
            if (enemy.health <= 0) {
                getEnemyHealth.innerHTML = 'Health: ' + 0;
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                displayVictory();
            } else {
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health + ' <strong class="lost-health">(-' + damage + ')</strong>';
            }
        }

        //Player attacks first
        if (getPlayerSpeed >= getEnemySpeed) {
            playerAttacks();
            if (enemy.health > 0) {
                enemyAttacks();                          
            }
        }

        //Enemy attacks first
        else if (getEnemySpeed >= getPlayerSpeed) {           
            enemyAttacks();
            if (player.health > 0) {
                playerAttacks();
            }
        }      
    }
}
