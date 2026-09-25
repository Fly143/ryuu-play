import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class NeoUpperEnergy_162 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "TEF";
  public name: string = "Neo Upper Energy";
  public fullName: string = "Neo Upper Energy TEF 162";
  public text: string = "You can't have more than 1 ACE SPEC card in your deck. As long as this card is attached to a Pokémon, it provides Colorless Energy. If this card is attached to a Stage 2 Pokémon, this card provides every type of Energy but provides only 2 Energy at a time. ACE SPEC: You can't have more than 1 ACE SPEC card in your deck.";
}
