import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class PsychicEnergy_156 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "CRZ";
  public name: string = "Psychic Energy";
  public fullName: string = "Psychic Energy CRZ 156";
  public text: string = "";
}
