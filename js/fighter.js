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
        this.abilities = ["Basic Attack"];
    }
}

class Koma extends Fighter {
    constructor(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed) {
        super(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed);
        this.abilities = ["Magic Attack"];
    }
}

class Skeir extends Fighter {
    constructor(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed) {
        super(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed);
        this.abilities = ["Basic Attack"];
    }
}

class Jess extends Fighter {
    constructor(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed) {
        super(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed);
        this.abilities = ["Basic Attack"];
    }
}

class Koren extends Fighter {
    constructor(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed) {
        super(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed);
        this.abilities = ["Basic Attack"];
    }
}

class Zephyr extends Fighter {
    constructor(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed) {
        super(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed);
        this.abilities = ["Basic Attack"];
    }
}

class Beardboy extends Fighter {
    constructor(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed) {
        super(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed);
        this.abilities = ["Basic Attack"];
    }
}

class Andrew extends Fighter {
    constructor(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed) {
        super(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed);
        this.abilities = ["Basic Attack"];
    }
}

class Joshuchrist extends Fighter {
    constructor(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed) {
        super(fighterName, health, attackDamage, abilityPower, armor, magicResist, speed);
        this.abilities = ["Basic Attack"];
    }
}

