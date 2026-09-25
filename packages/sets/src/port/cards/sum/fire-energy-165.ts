import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FireEnergy_165 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SUM";
  public name: string = "Fire Energy";
  public fullName: string = "Fire Energy SUM 165";
  public text: string = "";
}
