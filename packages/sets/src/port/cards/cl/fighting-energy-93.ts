import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FightingEnergy_93 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "CL";
  public name: string = "Fighting Energy";
  public fullName: string = "Fighting Energy CL 93";
  public text: string = "";
}
