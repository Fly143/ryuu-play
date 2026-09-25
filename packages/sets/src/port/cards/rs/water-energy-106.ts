import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class WaterEnergy_106 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "RS";
  public name: string = "Water Energy";
  public fullName: string = "Water Energy RS 106";
  public text: string = "";
}
