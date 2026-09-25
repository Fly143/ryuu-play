import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FireEnergy_76 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "GEN";
  public name: string = "Fire Energy";
  public fullName: string = "Fire Energy GEN 76";
  public text: string = "";
}
