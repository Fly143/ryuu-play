import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FightingEnergy_1062 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "N1";
  public name: string = "Fighting Energy";
  public fullName: string = "Fighting Energy N1 106";
  public text: string = "";
}
