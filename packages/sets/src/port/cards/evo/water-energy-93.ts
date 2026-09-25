import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class WaterEnergy_93 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "EVO";
  public name: string = "Water Energy";
  public fullName: string = "Water Energy EVO 93";
  public text: string = "";
}
