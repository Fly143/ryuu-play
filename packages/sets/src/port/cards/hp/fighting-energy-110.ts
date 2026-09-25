import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FightingEnergy_1102 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "HP";
  public name: string = "Fighting Energy";
  public fullName: string = "Fighting Energy HP 110";
  public text: string = "";
}
