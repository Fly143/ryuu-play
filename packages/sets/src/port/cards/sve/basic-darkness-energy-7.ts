import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class BasicDarknessEnergy_7 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SVE";
  public name: string = "Basic Darkness Energy";
  public fullName: string = "Basic Darkness Energy SVE 7";
  public text: string = "";
}
