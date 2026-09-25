import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class PsychicEnergy_232 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BST";
  public name: string = "Psychic Energy";
  public fullName: string = "Psychic Energy BST 232";
  public text: string = "";
}
