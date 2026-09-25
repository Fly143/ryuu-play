import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FightingEnergy_97 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BS";
  public name: string = "Fighting Energy";
  public fullName: string = "Fighting Energy BS 97";
  public text: string = "";
}
