import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class PsychicEnergy_107 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "RS";
  public name: string = "Psychic Energy";
  public fullName: string = "Psychic Energy RS 107";
  public text: string = "";
}
