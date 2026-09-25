import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FightingEnergy_110 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BW";
  public name: string = "Fighting Energy";
  public fullName: string = "Fighting Energy BW 110";
  public text: string = "";
}
