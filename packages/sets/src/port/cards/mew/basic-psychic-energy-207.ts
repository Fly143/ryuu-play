import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class BasicPsychicEnergy_207 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "MEW";
  public name: string = "Basic Psychic Energy";
  public fullName: string = "Basic Psychic Energy MEW 207";
  public text: string = "";
}
