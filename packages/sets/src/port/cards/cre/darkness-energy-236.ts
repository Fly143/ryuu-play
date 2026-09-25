import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class DarknessEnergy_236 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "CRE";
  public name: string = "Darkness Energy";
  public fullName: string = "Darkness Energy CRE 236";
  public text: string = "";
}
