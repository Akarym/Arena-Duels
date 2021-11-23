let player;

function Player(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed) {
    this.fighterName = fighterName;
    this.health = health;
    this.attackDamage = attackDamage;
    this.abilityPower = abilityPower;
    this.armor = armor;
    this.magicResist = magicResist;
    this.speed = speed;
}

let PlayerMoves = {
    calcAttack: function() {
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");

        //Player attacks!
        let getPlayerAttack = function() {
            let calcBaseDamage;
            if (player.attackDamage > player.abilityPower){
                calcBaseDamage = player.attackDamage;
            }
            else {
                calcBaseDamage = player.abilityPower;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            return calcOutputDamage;
        }

        //Enemy attacks!
        let getEnemyAttack = function() {
            let calcBaseDamage;
            if (enemy.attackDamage > enemy.abilityPower){
                calcBaseDamage = enemy.attackDamage;
            }
            else {
                calcBaseDamage = enemy.abilityPower;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            return calcOutputDamage;
        }

        if (getPlayerSpeed >= getEnemySpeed) {
            let playerAttack = getPlayerAttack();
            enemy.health = enemy.health - playerAttack;
            alert("Has atacado a " + enemy.fighterName + " y le has causado " + playerAttack + " de daño.");
            if (enemy.health <= 0){
                alert("Has ganado, gg easy peasy lemon squeezy. Refresca para jugar otra vez.");
                getEnemyHealth.innerHTML = 'Health: ' + 0;
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
            } else {
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health + ' <strong class="color-rojo">(-' + playerAttack + ')</strong>';
                //Enemy attacks
                let enemyAttack = getEnemyAttack();
                player.health = player.health - enemyAttack;
                alert("Has sido atacado por " + enemy.fighterName + " y te ha causado " + enemyAttack + " de daño.");
                if (player.health <= 0) {
                    alert("Has perdido, malisimo xD! Refresca para jugar otra vez.");
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                    getPlayerHealth.innerHTML = 'Health: ' + 0;
                } else {
                    getPlayerHealth.innerHTML = 'Health: ' + player.health + ' <strong class="color-rojo">(-' + enemyAttack + ')</strong>';
                }
            }
        }

        else if (getEnemySpeed >= getPlayerSpeed) {
            let enemyAttack = getEnemyAttack();
            player.health = player.health - enemyAttack;
            alert("Has sido atacado por " + enemy.fighterName + " y te ha causado " + enemyAttack + " de daño.");
            if (player.health <= 0){
                alert("Has perdido, malisimo xD! Refresca para jugar otra vez.");
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                getPlayerHealth.innerHTML = 'Health: ' + 0;
            } else {
                getPlayerHealth.innerHTML = 'Health: ' + player.health + ' <strong class="color-rojo">(-' + enemyAttack + ')</strong>';
                //Player attacks
                let playerAttack = getPlayerAttack();
                enemy.health = enemy.health - playerAttack;
                alert("Has atacado a " + enemy.fighterName + " y le has causado " + playerAttack + " de daño.");
                if (enemy.health <= 0) {
                    alert("Has ganado, gg easy peasy lemon squeezy. Refresca para jugar otra vez.");
                    getEnemyHealth.innerHTML = 'Health: ' + 0;
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                } else {
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health + ' <strong class="color-rojo">(-' + playerAttack + ')</strong>';
                }
            }
        }
    }
}