import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FightingEnergy_127 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "G1";
  public name: string = "Fighting Energy";
  public fullName: string = "Fighting Energy G1 127";
  public text: string = "";
}
