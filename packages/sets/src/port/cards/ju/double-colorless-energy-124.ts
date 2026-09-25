import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class DoubleColorlessEnergy_124 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "JU";
  public name: string = "Double Colorless Energy";
  public fullName: string = "Double Colorless Energy JU 124";
  public text: string = "Provides Colorless Colorless energy. Doesn't count as a basic Energy card.";
}
