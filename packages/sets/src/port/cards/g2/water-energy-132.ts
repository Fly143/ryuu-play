import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class WaterEnergy_1322 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "G2";
  public name: string = "Water Energy";
  public fullName: string = "Water Energy G2 132";
  public text: string = "";
}
