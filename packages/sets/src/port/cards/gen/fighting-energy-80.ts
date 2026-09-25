import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FightingEnergy_80 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "GEN";
  public name: string = "Fighting Energy";
  public fullName: string = "Fighting Energy GEN 80";
  public text: string = "";
}
