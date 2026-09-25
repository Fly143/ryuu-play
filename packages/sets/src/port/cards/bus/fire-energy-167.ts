import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FireEnergy_167 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BUS";
  public name: string = "Fire Energy";
  public fullName: string = "Fire Energy BUS 167";
  public text: string = "";
}
