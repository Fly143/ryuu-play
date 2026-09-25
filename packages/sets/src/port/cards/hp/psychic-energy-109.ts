import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class PsychicEnergy_1092 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "HP";
  public name: string = "Psychic Energy";
  public fullName: string = "Psychic Energy HP 109";
  public text: string = "";
}
