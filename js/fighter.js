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

class Nakart extends Fighter {
    constructor(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed) {
        super(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed);
        this.abilities = ["Basic Attack", "Piercing Light"];
    }
}

class Koma extends Fighter {
    constructor(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed) {
        super(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed);
        this.abilities = ["Basic Attack", "Dark Matter"];
    }
}

class Skeir extends Fighter {
    constructor(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed) {
        super(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed);
        this.abilities = ["Basic Attack", "ChronoBreak"];
    }
}

class Jess extends Fighter {
    constructor(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed) {
        super(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed);
        this.abilities = ["Basic Attack", "Steel Tempest"];
    }
}

class Koren extends Fighter {
    constructor(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed) {
        super(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed);
        this.abilities = ["Basic Attack", "Broken Wings"];
    }
}

class Zephyr extends Fighter {
    constructor(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed) {
        super(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed);
        this.abilities = ["Basic Attack", "Bastion"];
    }
}

class Beardboy extends Fighter {
    constructor(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed) {
        super(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed);
        this.abilities = ["Basic Attack", "Convoke the Spirits"];
    }
}

class Andrew extends Fighter {
    constructor(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed) {
        super(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed);
        this.abilities = ["Basic Attack", "Raging Blow"];
    }
}

class Joshuchrist extends Fighter {
    constructor(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed) {
        super(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed);
        this.abilities = ["Basic Attack", "Dragons Rage"];
    }
}

