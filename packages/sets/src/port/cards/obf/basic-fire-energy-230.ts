import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class BasicFireEnergy_230 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "OBF";
  public name: string = "Basic Fire Energy";
  public fullName: string = "Basic Fire Energy OBF 230";
  public text: string = "";
}
