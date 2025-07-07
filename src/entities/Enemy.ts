export class Enemy {
  constructor(public hp: number = 1) {}

  takeDamage(dmg: number) {
    this.hp -= dmg;
    console.log(`Enemy takes ${dmg} damage, left ${this.hp}`);
    if (this.hp <= 0) {
      this.onDefeated();
    }
  }

  onDefeated() {
    console.log('Enemy defeated');
  }
}
