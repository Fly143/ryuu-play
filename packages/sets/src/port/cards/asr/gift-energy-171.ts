import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class GiftEnergy_171 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "ASR";
  public name: string = "Gift Energy";
  public fullName: string = "Gift Energy ASR 171";
  public text: string = "As long as this card is attached to a Pokémon, it provides Colorless Energy. If the Pokémon this card is attached to is Knocked Out by damage from an attack from your opponent's Pokémon, draw cards until you have 7 cards in your hand.";
}
