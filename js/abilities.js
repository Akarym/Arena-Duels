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
    ConvokeTheSpirits: function (fighter) {
        let calcOutputDamage = fighter.abilityPower;
        for (let i = 0; i <= 16; i++){
            calcOutputDamage = calcOutputDamage + Math.floor(Math.random() * Math.floor(10));
        }
        return calcOutputDamage;
    },
    RagingBlow: function (fighter) {
        let calcBaseDamage = fighter.attackDamage * 2;
        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let calcOutputDamage = calcBaseDamage + offsetDamage;
        return calcOutputDamage;
    }
}
