let fighterList = ["Nakart", "Koma", "Skeir", "Jess", "Beardboy", "Koren", "Zephyr", "Andrew", "Joshuchrist"];
let player;
let enemy;

function Fighter(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed) {
    this.fighterName = fighterName;
    this.health = health;
    this.attackDamage = attackDamage;
    this.abilityPower = abilityPower;
    this.armor = armor;
    this.magicResist = magicResist;
    this.speed = speed;
}
