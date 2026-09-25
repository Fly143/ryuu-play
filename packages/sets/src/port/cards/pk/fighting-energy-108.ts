import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FightingEnergy_108 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "PK";
  public name: string = "Fighting Energy";
  public fullName: string = "Fighting Energy PK 108";
  public text: string = "";
}
