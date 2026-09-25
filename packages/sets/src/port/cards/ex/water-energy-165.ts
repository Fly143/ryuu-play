import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class WaterEnergy_165 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "EX";
  public name: string = "Water Energy";
  public fullName: string = "Water Energy EX 165";
  public text: string = "";
}
