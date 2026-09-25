import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class BasicDarknessEnergy_98 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SFA";
  public name: string = "Basic Darkness Energy";
  public fullName: string = "Basic Darkness Energy SFA 98";
  public text: string = "";
}
