import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class HerbalEnergy_103 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "FFI";
  public name: string = "Herbal Energy";
  public fullName: string = "Herbal Energy FFI 103";
  public text: string = "This card can only be attached to Grass Pokémon. This card provides Grass Energy only while this card is attached to a Grass Pokémon. When you attach this card from your hand to 1 of your Grass Pokémon, heal 30 damage from that Pokémon. (If this card is attached to anything other than a Grass Pokémon, discard this card.)";
}
