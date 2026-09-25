import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class PsychicEnergy_12 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "TK2A";
  public name: string = "Psychic Energy";
  public fullName: string = "Psychic Energy TK2A 12";
  public text: string = "";
}
