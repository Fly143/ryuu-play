import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class DoubleColorlessEnergy_96 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BS";
  public name: string = "Double Colorless Energy";
  public fullName: string = "Double Colorless Energy BS 96";
  public text: string = "Provides ColorlessColorless energy. Doesn't count as a basic Energy card.";
}
