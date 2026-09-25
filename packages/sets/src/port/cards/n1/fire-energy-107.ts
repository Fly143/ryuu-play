import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FireEnergy_107 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "N1";
  public name: string = "Fire Energy";
  public fullName: string = "Fire Energy N1 107";
  public text: string = "";
}
