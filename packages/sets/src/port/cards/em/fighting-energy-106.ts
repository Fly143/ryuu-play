import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FightingEnergy_106 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "EM";
  public name: string = "Fighting Energy";
  public fullName: string = "Fighting Energy EM 106";
  public text: string = "";
}
