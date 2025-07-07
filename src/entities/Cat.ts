export enum CatType {
  Default,
  Split,
  Fire,
  Bounce,
}

export class Cat {
  constructor(public type: CatType = CatType.Default) {}

  launch(angle: number, power: number) {
    console.log(`Launch cat type ${this.type} with angle ${angle} and power ${power}`);
  }
}
