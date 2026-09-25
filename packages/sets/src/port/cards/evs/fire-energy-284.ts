import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FireEnergy_284 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "EVS";
  public name: string = "Fire Energy";
  public fullName: string = "Fire Energy EVS 284";
  public text: string = "";
}
