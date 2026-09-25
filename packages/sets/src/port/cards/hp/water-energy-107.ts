import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class WaterEnergy_1072 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "HP";
  public name: string = "Water Energy";
  public fullName: string = "Water Energy HP 107";
  public text: string = "";
}
