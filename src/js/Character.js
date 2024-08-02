export default class Character {
  constructor(name, type, attack) {
    this.name = name;
    this.type = type;
    this.attackValue = attack;
    this.stonedValue = false;
    this.distance = 1;
  }

  set stoned(value) {
    this.stonedValue = value;
  }

  get stoned() {
    return this.stonedValue;
  }

  set attack(distance) {
    this.distance = distance;
  }

  get attack() {
    let attack = this.attackValue * (1 - (this.distance - 1) * 0.1);
    if (this.stoned) {
      attack -= Math.log2(this.distance) * 5;
    }
    return attack > 0 ? Math.round(attack) : 0;
  }
}
