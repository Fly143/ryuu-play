import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class PsychicEnergy_109 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BW";
  public name: string = "Psychic Energy";
  public fullName: string = "Psychic Energy BW 109";
  public text: string = "";
}
