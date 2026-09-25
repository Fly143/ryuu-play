import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class LightningEnergy_126 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "DP";
  public name: string = "Lightning Energy";
  public fullName: string = "Lightning Energy DP 126";
  public text: string = "";
}
