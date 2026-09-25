import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class PsychicEnergy_105 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "EM";
  public name: string = "Psychic Energy";
  public fullName: string = "Psychic Energy EM 105";
  public text: string = "";
}
