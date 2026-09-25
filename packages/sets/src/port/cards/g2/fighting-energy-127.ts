import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FightingEnergy_1272 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "G2";
  public name: string = "Fighting Energy";
  public fullName: string = "Fighting Energy G2 127";
  public text: string = "";
}
