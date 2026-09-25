import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FightingEnergy_120 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "HS";
  public name: string = "Fighting Energy";
  public fullName: string = "Fighting Energy HS 120";
  public text: string = "";
}
