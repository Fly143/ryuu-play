import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class BeastEnergy_117 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "FLI";
  public name: string = "Beast Energy ◇";
  public fullName: string = "Beast Energy ◇ FLI 117";
  public text: string = "This card provides Colorless Energy. While this card is attached to an Ultra Beast, it provides every type of Energy but provides only 1 Energy at a time. The attacks of the Ultra Beast this card is attached to do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). ◇ (Prism Star) Rule: You can't have more than 1 ◇ card with the same name in your deck. If a ◇ card would go to the discard pile, put it in the Lost Zone instead.";
}
