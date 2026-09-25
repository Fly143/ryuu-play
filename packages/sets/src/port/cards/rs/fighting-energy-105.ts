import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FightingEnergy_105 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "RS";
  public name: string = "Fighting Energy";
  public fullName: string = "Fighting Energy RS 105";
  public text: string = "";
}
