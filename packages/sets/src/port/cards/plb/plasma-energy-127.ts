import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class PlasmaEnergy_127 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "PLB";
  public name: string = "Plasma Energy";
  public fullName: string = "Plasma Energy PLB 127";
  public text: string = "This card provides Colorless Energy.";
}
