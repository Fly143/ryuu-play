import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FireEnergy_126 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "JU";
  public name: string = "Fire Energy";
  public fullName: string = "Fire Energy JU 126";
  public text: string = "";
}
