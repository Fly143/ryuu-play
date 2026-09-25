import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FireEnergy_98 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BS";
  public name: string = "Fire Energy";
  public fullName: string = "Fire Energy BS 98";
  public text: string = "";
}
