import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class BasicFightingEnergy_14 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SVE";
  public name: string = "Basic Fighting Energy";
  public fullName: string = "Basic Fighting Energy SVE 14";
  public text: string = "";
}
