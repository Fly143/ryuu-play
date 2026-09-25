import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FireEnergy_153 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "CRZ";
  public name: string = "Fire Energy";
  public fullName: string = "Fire Energy CRZ 153";
  public text: string = "";
}
