let Animations = {
    PlayerBasicAttack: function() {
        let animationEnd = function () {
            playerImg.classList.remove("player-attack-animation");
            playerImg.removeEventListener("webkitAnimationEnd", animationEnd);
            playerImg.removeEventListener("animationend", animationEnd);
        }

        let playerImg = document.querySelector(".img-player");
        playerImg.classList.add("player-attack-animation");
        playerImg.addEventListener("webkitAnimationEnd", animationEnd);
        playerImg.addEventListener("animationend", animationEnd);
    },
    EnemyBasicAttack: function() {
        let animationEnd = function () {
            enemyImg.classList.remove("enemy-attack-animation");
            enemyImg.removeEventListener("webkitAnimationEnd", animationEnd);
            enemyImg.removeEventListener("animationend", animationEnd);
        }

        let enemyImg = document.querySelector(".img-enemy");
        enemyImg.classList.add("enemy-attack-animation");
        enemyImg.addEventListener("webkitAnimationEnd", animationEnd);
        enemyImg.addEventListener("animationend", animationEnd);
    },
    PlayerDamageTaken: function() {
        let animationEnd = function () {
            playerImg.classList.remove("damage-taken-animation");
            playerImg.removeEventListener("webkitAnimationEnd", animationEnd);
            playerImg.removeEventListener("animationend", animationEnd);
        }
        
        let playerImg = document.querySelector(".img-player");
        playerImg.classList.add("damage-taken-animation");
        playerImg.addEventListener("webkitAnimationEnd", animationEnd);
        playerImg.addEventListener("animationend", animationEnd);        
    },
    EnemyDamageTaken: function() {
        let animationEnd = function () {
            enemyImg.classList.remove("damage-taken-animation");
            enemyImg.removeEventListener("webkitAnimationEnd", animationEnd);
            enemyImg.removeEventListener("animationend", animationEnd);
        }

        let enemyImg = document.querySelector(".img-enemy");
        enemyImg.classList.add("damage-taken-animation");
        enemyImg.addEventListener("webkitAnimationEnd", animationEnd);
        enemyImg.addEventListener("animationend", animationEnd);       
    }
}