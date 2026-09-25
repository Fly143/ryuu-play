import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class WaterEnergy_134 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "XY";
  public name: string = "Water Energy";
  public fullName: string = "Water Energy XY 134";
  public text: string = "";
}
