import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FireEnergy_1282 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "G2";
  public name: string = "Fire Energy";
  public fullName: string = "Fire Energy G2 128";
  public text: string = "";
}
