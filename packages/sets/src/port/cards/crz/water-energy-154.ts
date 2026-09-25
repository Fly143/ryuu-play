import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class WaterEnergy_154 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "CRZ";
  public name: string = "Water Energy";
  public fullName: string = "Water Energy CRZ 154";
  public text: string = "";
}
