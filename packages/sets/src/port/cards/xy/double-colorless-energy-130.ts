import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class DoubleColorlessEnergy_130 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "XY";
  public name: string = "Double Colorless Energy";
  public fullName: string = "Double Colorless Energy XY 130";
  public text: string = "Double Colorless Energy provides ColorlessColorless Energy.";
}
