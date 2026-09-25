import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FightingEnergy_137 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "XY";
  public name: string = "Fighting Energy";
  public fullName: string = "Fighting Energy XY 137";
  public text: string = "";
}
