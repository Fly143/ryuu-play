import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class PlasmaEnergy_106 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "FLF";
  public name: string = "Plasma Energy";
  public fullName: string = "Plasma Energy FLF 106";
  public text: string = "This card provides Colorless Energy.";
}
