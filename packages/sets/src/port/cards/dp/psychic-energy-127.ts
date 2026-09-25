import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class PsychicEnergy_127 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "DP";
  public name: string = "Psychic Energy";
  public fullName: string = "Psychic Energy DP 127";
  public text: string = "";
}
