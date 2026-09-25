import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class WaterEnergy_166 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SUM";
  public name: string = "Water Energy";
  public fullName: string = "Water Energy SUM 166";
  public text: string = "";
}
