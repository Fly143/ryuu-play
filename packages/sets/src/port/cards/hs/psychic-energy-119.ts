import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class PsychicEnergy_119 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "HS";
  public name: string = "Psychic Energy";
  public fullName: string = "Psychic Energy HS 119";
  public text: string = "";
}
