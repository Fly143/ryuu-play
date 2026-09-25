import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class DarknessEnergy_129 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "DP";
  public name: string = "Darkness Energy";
  public fullName: string = "Darkness Energy DP 129";
  public text: string = "";
}
