let Abilities = {
    BasicAttack: function (fighter) {
        let calcBaseDamage;
        if (fighter.attackDamage > fighter.abilityPower){
            calcBaseDamage = fighter.attackDamage;
        }
        else {
            calcBaseDamage = fighter.abilityPower;
        }
        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let calcOutputDamage = calcBaseDamage + offsetDamage;
        return calcOutputDamage;
    },
    Bastion: function (fighter) {
        let calcBaseDamage = fighter.attackDamage;
        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let calcOutputDamage = calcBaseDamage + offsetDamage;
        return calcOutputDamage;
    },
    BrokenWings: function (fighter) {
        let calcOutputDamage = fighter.attackDamage;
        for (let i = 0; i < 3;  i++) {
            calcOutputDamage = calcOutputDamage + fighter.attackDamage/2 + Math.floor(Math.random() * Math.floor(10));
        }
        return calcOutputDamage;
    },
    ConvokeTheSpirits: function (fighter) {
        let calcOutputDamage = fighter.abilityPower;
        for (let i = 0; i < 16; i++) {
            calcOutputDamage = calcOutputDamage + Math.floor(Math.random() * Math.floor(10));
        }
        return calcOutputDamage;
    },
    ChronoBreak: function (fighter) {
        return fighter.attackDamage + fighter.abilityPower + Math.floor(Math.random() * Math.floor(10));
    },
    DarkMatter: function (fighter) {
        let calcOutputDamage = fighter.abilityPower * 3 + Math.floor(Math.random() * Math.floor(10));
        return calcOutputDamage;
    },
    DragonsRage: function (fighter) {
        let calcOutputDamage = fighter.attackDamage * 3 + + Math.floor(Math.random() * Math.floor(10));
        return calcOutputDamage;
    },
    PiercingLight: function (fighter) {
        return fighter.attackDamage + fighter.abilityPower * 2 + + Math.floor(Math.random() * Math.floor(10));
    },
    RagingBlow: function (fighter) {
        let calcBaseDamage = fighter.attackDamage * 2;
        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let calcOutputDamage = calcBaseDamage + offsetDamage;
        return calcOutputDamage;
    },    
    SteelTempest: function (fighter) {
        return fighter.attackDamage * 3 + Math.floor(Math.random() * Math.floor(fighter.attackDamage));
    }
}
