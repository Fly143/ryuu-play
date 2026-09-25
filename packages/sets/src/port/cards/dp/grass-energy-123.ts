import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class GrassEnergy_123 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "DP";
  public name: string = "Grass Energy";
  public fullName: string = "Grass Energy DP 123";
  public text: string = "";
}
