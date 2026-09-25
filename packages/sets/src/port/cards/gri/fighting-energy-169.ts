import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FightingEnergy_1692 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "GRI";
  public name: string = "Fighting Energy";
  public fullName: string = "Fighting Energy GRI 169";
  public text: string = "";
}
