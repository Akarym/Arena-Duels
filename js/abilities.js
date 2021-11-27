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
    }
}