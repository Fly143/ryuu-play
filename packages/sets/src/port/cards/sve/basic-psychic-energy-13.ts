import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class BasicPsychicEnergy_13 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SVE";
  public name: string = "Basic Psychic Energy";
  public fullName: string = "Basic Psychic Energy SVE 13";
  public text: string = "";
}
