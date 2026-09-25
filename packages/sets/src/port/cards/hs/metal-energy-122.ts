import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class MetalEnergy_122 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "HS";
  public name: string = "Metal Energy";
  public fullName: string = "Metal Energy HS 122";
  public text: string = "";
}
