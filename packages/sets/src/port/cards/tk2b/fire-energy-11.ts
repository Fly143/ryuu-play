import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FireEnergy_11 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "TK2B";
  public name: string = "Fire Energy";
  public fullName: string = "Fire Energy TK2B 11";
  public text: string = "";
}
