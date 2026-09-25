import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class WaterEnergy_132 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "G1";
  public name: string = "Water Energy";
  public fullName: string = "Water Energy G1 132";
  public text: string = "";
}
