import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FireEnergy_104 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "PK";
  public name: string = "Fire Energy";
  public fullName: string = "Fire Energy PK 104";
  public text: string = "";
}
