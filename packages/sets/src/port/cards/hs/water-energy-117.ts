import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class WaterEnergy_117 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "HS";
  public name: string = "Water Energy";
  public fullName: string = "Water Energy HS 117";
  public text: string = "";
}
