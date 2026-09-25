import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class PsychicEnergy_101 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BS";
  public name: string = "Psychic Energy";
  public fullName: string = "Psychic Energy BS 101";
  public text: string = "";
}
