import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class WaterEnergy_90 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "CL";
  public name: string = "Water Energy";
  public fullName: string = "Water Energy CL 90";
  public text: string = "";
}
