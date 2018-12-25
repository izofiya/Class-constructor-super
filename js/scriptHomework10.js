// 1. Есть 2 типа персонажей - воины и маги. Воин описывается классом Warrior, маг - классом Wizard. Оба наследуются от базового класса Character. У всех персонажей есть 
// имя name, максимальное количество очков здоровья maxHealth, текущие очки здоровья currentHealth, очки действия, которые тратятся на действие персонажа: максимальное 
// их количество maxActionPoints и текущее количество currentActionPoints. У всех персонажей есть функция showCharacterInfo, которая выводит на консоль описание 
// персонажа: его имя, его класс (воин или маг), текущие и максимальные очки здоровья, текущие и максимальные очки действия, его предметы.
class Character {
  constructor(name, maxHealth, weapon,  maxActionPoints) {
    this.name = name;
    this.maxHealth = maxHealth;
    this.weapon = weapon;
    this.currentHealth = maxHealth;
    this.maxActionPoints = maxActionPoints;
    this.currentActionPoints = maxActionPoints;
  }
    attack (otherCharacter) {
      otherCharacter.currentHealth = otherCharacter.maxHealth - this.weapon.power;
      this.currentActionPoints = this.maxActionPoints - this.weapon.actionPoints;
    }
    showCharacterInfo (character) {
      if(character instanceof Warrior) {
        console.log('Character description: class - Warrior, name - ' + this.name + ', maxHealth - ' + this.maxHealth +
         ', currentHealth - ' + this.currentHealth + ', maxActionPoints - ' +  this.maxActionPoints + ', currentActionPoints - ' + this.currentActionPoints);
      }
      if(character instanceof Wizard) {
        console.log('Character description: class - Wizard, name - ' + this.name + ', maxHealth - ' + this.maxHealth +
         ', currentHealth - ' + this.currentHealth + ', maxActionPoints - ' +  this.maxActionPoints + ', currentActionPoints - ' + this.currentActionPoints);
      }
    }
}
class Warrior extends Character {
  constructor (name, maxHealth, weapon,  maxActionPoints) {
    super(name, maxHealth, weapon,  maxActionPoints);
  }
}
class Wizard extends Character {
  constructor (name, maxHealth, weapon,  maxActionPoints) {
    super(name, maxHealth, weapon,  maxActionPoints);
  }
}
class Weapon {
  constructor (name, power, actionPoints) {
    this.name = name;
    this.power = power;
    this.actionPoints = actionPoints;
  }
}

  const staff = new Weapon('staff', 5, 1);
  const warrior = new Warrior('Tom', 20, staff, 10);
  const wizard = new Wizard('Bill', 15, staff, 5);
  warrior.showCharacterInfo(warrior);
  wizard.showCharacterInfo(wizard);
  
  warrior.attack(wizard);
  wizard.attack(warrior);

  warrior.showCharacterInfo(warrior);
  wizard.showCharacterInfo(wizard);

