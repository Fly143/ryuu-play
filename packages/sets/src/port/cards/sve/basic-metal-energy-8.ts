import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class BasicMetalEnergy_8 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SVE";
  public name: string = "Basic Metal Energy";
  public fullName: string = "Basic Metal Energy SVE 8";
  public text: string = "";
}
