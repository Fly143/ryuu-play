import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class PsychicEnergy_164 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "EX";
  public name: string = "Psychic Energy";
  public fullName: string = "Psychic Energy EX 164";
  public text: string = "";
}
