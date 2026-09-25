import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class BasicWaterEnergy_279 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "PAL";
  public name: string = "Basic Water Energy";
  public fullName: string = "Basic Water Energy PAL 279";
  public text: string = "";
}
