import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class WaterEnergy_124 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "CRI";
  public name: string = "Water Energy";
  public fullName: string = "Water Energy CRI 124";
  public text: string = "";
}
