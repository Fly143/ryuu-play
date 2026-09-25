import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class PsychicEnergy_92 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "CL";
  public name: string = "Psychic Energy";
  public fullName: string = "Psychic Energy CL 92";
  public text: string = "";
}
