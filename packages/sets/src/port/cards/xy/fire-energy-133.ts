import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FireEnergy_133 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "XY";
  public name: string = "Fire Energy";
  public fullName: string = "Fire Energy XY 133";
  public text: string = "";
}
