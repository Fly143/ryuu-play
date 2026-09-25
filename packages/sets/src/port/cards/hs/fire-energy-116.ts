import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FireEnergy_116 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "HS";
  public name: string = "Fire Energy";
  public fullName: string = "Fire Energy HS 116";
  public text: string = "";
}
