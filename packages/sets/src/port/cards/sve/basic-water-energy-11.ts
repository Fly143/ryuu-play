import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class BasicWaterEnergy_11 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SVE";
  public name: string = "Basic Water Energy";
  public fullName: string = "Basic Water Energy SVE 11";
  public text: string = "";
}
