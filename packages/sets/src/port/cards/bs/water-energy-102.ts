import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class WaterEnergy_102 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BS";
  public name: string = "Water Energy";
  public fullName: string = "Water Energy BS 102";
  public text: string = "";
}
