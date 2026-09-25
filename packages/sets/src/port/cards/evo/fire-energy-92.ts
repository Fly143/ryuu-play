import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FireEnergy_92 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "EVO";
  public name: string = "Fire Energy";
  public fullName: string = "Fire Energy EVO 92";
  public text: string = "";
}
