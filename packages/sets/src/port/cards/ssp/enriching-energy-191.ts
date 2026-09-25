import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class EnrichingEnergy_191 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SSP";
  public name: string = "Enriching Energy";
  public fullName: string = "Enriching Energy SSP 191";
  public text: string = "As long as this card is attached to a Pokémon, it provides Colorless Energy. When you attach this card from your hand to a Pokémon, draw 4 cards. ACE SPEC: You can't have more than 1 ACE SPEC card in your deck.";
}
