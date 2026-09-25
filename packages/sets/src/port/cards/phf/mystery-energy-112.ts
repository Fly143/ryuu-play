import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class MysteryEnergy_112 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "PHF";
  public name: string = "Mystery Energy";
  public fullName: string = "Mystery Energy PHF 112";
  public text: string = "This card can only be attached to Psychic Pokémon. This card provides Psychic Energy only while this card is attached to a Psychic Pokémon. The Retreat Cost of the Pokémon this card is attached to is ColorlessColorless less. (If this card is attached to anything other than a Psychic Pokémon, discard this card.)";
}
