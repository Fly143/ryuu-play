import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class DarknessEnergy_94 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "CL";
  public name: string = "Darkness Energy";
  public fullName: string = "Darkness Energy CL 94";
  public text: string = "";
}
