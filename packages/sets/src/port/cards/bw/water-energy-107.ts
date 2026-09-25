import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class WaterEnergy_107 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BW";
  public name: string = "Water Energy";
  public fullName: string = "Water Energy BW 107";
  public text: string = "";
}
