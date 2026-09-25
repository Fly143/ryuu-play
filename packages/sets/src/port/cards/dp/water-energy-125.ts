import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class WaterEnergy_125 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "DP";
  public name: string = "Water Energy";
  public fullName: string = "Water Energy DP 125";
  public text: string = "";
}
