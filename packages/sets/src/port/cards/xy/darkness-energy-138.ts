import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class DarknessEnergy_138 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "XY";
  public name: string = "Darkness Energy";
  public fullName: string = "Darkness Energy XY 138";
  public text: string = "";
}
