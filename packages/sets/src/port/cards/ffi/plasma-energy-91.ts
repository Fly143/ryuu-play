import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class PlasmaEnergy_91 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "FFI";
  public name: string = "Plasma Energy";
  public fullName: string = "Plasma Energy FFI 91";
  public text: string = "This card provides Colorless Energy.";
}
