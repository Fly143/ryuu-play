import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class MetalEnergy_139 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "XY";
  public name: string = "Metal Energy";
  public fullName: string = "Metal Energy XY 139";
  public text: string = "";
}
