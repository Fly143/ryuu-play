import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class LuckyEnergy_158 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BST";
  public name: string = "Lucky Energy";
  public fullName: string = "Lucky Energy BST 158";
  public text: string = "As long as this card is attached to a Pokémon, it provides Colorless Energy. If the Pokémon this card is attached to is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if it is Knocked Out), draw a card.";
}
