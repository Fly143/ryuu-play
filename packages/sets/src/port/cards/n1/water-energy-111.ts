import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class WaterEnergy_111 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "N1";
  public name: string = "Water Energy";
  public fullName: string = "Water Energy N1 111";
  public text: string = "";
}
