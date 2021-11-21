let posibleEnemies = ["Nakart", "Koma", "Skeir", "Jess", "Beardboy", "Koren", "Zephyr", "Andrew", "Joshuchrist"];
let enemy;

function Enemy(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed) {
    this.fighterName = fighterName;
    this.health = health;
    this.attackDamage = attackDamage;
    this.abilityPower = abilityPower;
    this.armor = armor;
    this.magicResist = magicResist;
    this.speed = speed;
}
