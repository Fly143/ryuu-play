import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FireEnergy_1062 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "HP";
  public name: string = "Fire Energy";
  public fullName: string = "Fire Energy HP 106";
  public text: string = "";
}
