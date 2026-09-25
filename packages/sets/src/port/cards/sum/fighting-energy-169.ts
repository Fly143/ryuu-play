import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FightingEnergy_169 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SUM";
  public name: string = "Fighting Energy";
  public fullName: string = "Fighting Energy SUM 169";
  public text: string = "";
}
