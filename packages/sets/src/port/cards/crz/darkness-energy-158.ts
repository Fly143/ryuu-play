import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class DarknessEnergy_1582 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "CRZ";
  public name: string = "Darkness Energy";
  public fullName: string = "Darkness Energy CRZ 158";
  public text: string = "";
}
