import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class BasicMetalEnergy_99 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SFA";
  public name: string = "Basic Metal Energy";
  public fullName: string = "Basic Metal Energy SFA 99";
  public text: string = "";
}
