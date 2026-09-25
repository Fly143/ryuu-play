import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class BasicWaterEnergy_3 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SVE";
  public name: string = "Basic Water Energy";
  public fullName: string = "Basic Water Energy SVE 3";
  public text: string = "";
}
