import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class WaterEnergy_105 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "PK";
  public name: string = "Water Energy";
  public fullName: string = "Water Energy PK 105";
  public text: string = "";
}
