import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FightingEnergy_157 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "CRZ";
  public name: string = "Fighting Energy";
  public fullName: string = "Fighting Energy CRZ 157";
  public text: string = "";
}
