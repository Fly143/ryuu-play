import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FightingEnergy_233 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BST";
  public name: string = "Fighting Energy";
  public fullName: string = "Fighting Energy BST 233";
  public text: string = "";
}
