import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class PsychicEnergy_136 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "XY";
  public name: string = "Psychic Energy";
  public fullName: string = "Psychic Energy XY 136";
  public text: string = "";
}
