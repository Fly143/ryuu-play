import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class WaterEnergy_103 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "EM";
  public name: string = "Water Energy";
  public fullName: string = "Water Energy EM 103";
  public text: string = "";
}
