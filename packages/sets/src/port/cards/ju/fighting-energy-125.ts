import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FightingEnergy_125 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "JU";
  public name: string = "Fighting Energy";
  public fullName: string = "Fighting Energy JU 125";
  public text: string = "";
}
