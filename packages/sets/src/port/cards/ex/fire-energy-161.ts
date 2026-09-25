import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FireEnergy_161 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "EX";
  public name: string = "Fire Energy";
  public fullName: string = "Fire Energy EX 161";
  public text: string = "";
}
