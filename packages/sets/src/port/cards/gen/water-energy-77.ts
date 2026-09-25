import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class WaterEnergy_77 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "GEN";
  public name: string = "Water Energy";
  public fullName: string = "Water Energy GEN 77";
  public text: string = "";
}
