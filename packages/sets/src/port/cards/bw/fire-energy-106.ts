import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FireEnergy_106 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BW";
  public name: string = "Fire Energy";
  public fullName: string = "Fire Energy BW 106";
  public text: string = "";
}
