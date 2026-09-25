import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class BasicFightingEnergy_258 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SVI";
  public name: string = "Basic Fighting Energy";
  public fullName: string = "Basic Fighting Energy SVI 258";
  public text: string = "";
}
