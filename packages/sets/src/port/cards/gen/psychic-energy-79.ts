import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class PsychicEnergy_79 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "GEN";
  public name: string = "Psychic Energy";
  public fullName: string = "Psychic Energy GEN 79";
  public text: string = "";
}
