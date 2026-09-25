import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class PsychicEnergy_95 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "EVO";
  public name: string = "Psychic Energy";
  public fullName: string = "Psychic Energy EVO 95";
  public text: string = "";
}
