import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class PsychicEnergy_110 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "N1";
  public name: string = "Psychic Energy";
  public fullName: string = "Psychic Energy N1 110";
  public text: string = "";
}
