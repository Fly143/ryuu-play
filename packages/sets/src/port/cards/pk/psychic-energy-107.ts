import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class PsychicEnergy_1072 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "PK";
  public name: string = "Psychic Energy";
  public fullName: string = "Psychic Energy PK 107";
  public text: string = "";
}
