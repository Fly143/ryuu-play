import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FireEnergy_102 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "EM";
  public name: string = "Fire Energy";
  public fullName: string = "Fire Energy EM 102";
  public text: string = "";
}
