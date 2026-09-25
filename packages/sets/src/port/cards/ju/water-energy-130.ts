import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class WaterEnergy_130 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "JU";
  public name: string = "Water Energy";
  public fullName: string = "Water Energy JU 130";
  public text: string = "";
}
