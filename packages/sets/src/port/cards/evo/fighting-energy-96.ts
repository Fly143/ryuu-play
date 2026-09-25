import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FightingEnergy_96 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "EVO";
  public name: string = "Fighting Energy";
  public fullName: string = "Fighting Energy EVO 96";
  public text: string = "";
}
