import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FightingEnergy_160 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "EX";
  public name: string = "Fighting Energy";
  public fullName: string = "Fighting Energy EX 160";
  public text: string = "";
}
