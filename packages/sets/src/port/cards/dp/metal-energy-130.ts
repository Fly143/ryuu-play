import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class MetalEnergy_130 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "DP";
  public name: string = "Metal Energy";
  public fullName: string = "Metal Energy DP 130";
  public text: string = "";
}
