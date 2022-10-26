const doragonDamaju = function () {
  return Math.floor(Math.random() * (this.strength - 14) + 15);
};
const variorDamaju = function () {
  return Math.floor(
    Math.random() * (this.weaponDmg * this.strength - this.strength + 1) +
      this.strength
  );
};
const majouDamaju = function () {
  return {
    damaju:
      this.mana < 15
        ? "More mana is required!"
        : Math.floor(
            Math.random() * (this.intelligence + 1) + this.intelligence
          ),
    mama: this.mana < 15 ? 0 : 15,
  };
};

const gameActions = {
  attacku: (attaker, damageCalc, targetu) => {
    attaker.damage = damageCalc;
    let dmg = attaker.damage();
    if (typeof dmg === "object" && dmg.mama > 0) attaker.mana -= dmg.mama;
    if (typeof dmg === "object" && dmg.mama === 0) {
      console.log(dmg.damaju);
      return;
    }
    targetu.healthPoints -= typeof dmg === "number" ? dmg : dmg.damaju;
  },
  variorTime: (attaker, damageCalc, targetu) => {
    attaker.damage = damageCalc.call(attaker);
    targetu.healthPoints -= attaker.damage;
  },
  turnResults: () => battleMembers,
};

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
console.log(battleMembers);
while (
  (mage.healthPoints > 0 || warrior.healthPoints > 0) &&
  dragon.healthPoints > 0
) {
  gameActions.variorTime(warrior, variorDamaju, dragon);
  console.log(gameActions.turnResults());
  // gameActions.attacku(mage, majouDamaju, dragon);
  // console.log(battleMembers);
  // gameActions.attacku(warrior, variorDamaju, dragon);
  // console.log(battleMembers);
  // gameActions.attacku(dragon, doragonDamaju, warrior);
  // console.log(battleMembers);
}
console.log(battleMembers);
