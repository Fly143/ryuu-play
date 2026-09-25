import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class PowerfulColorlessEnergy_176 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "DAA";
  public name: string = "Powerful Colorless Energy";
  public fullName: string = "Powerful Colorless Energy DAA 176";
  public text: string = "As long as this card is attached to a Pokémon, it provides Colorless Energy. The attacks of the Colorless Pokémon this card is attached to do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).";
}
