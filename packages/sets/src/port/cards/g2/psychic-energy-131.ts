import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class PsychicEnergy_1312 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "G2";
  public name: string = "Psychic Energy";
  public fullName: string = "Psychic Energy G2 131";
  public text: string = "";
}
