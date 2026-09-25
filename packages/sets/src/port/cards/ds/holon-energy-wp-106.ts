import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class HolonEnergyWP_106 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "DS";
  public name: string = "Holon Energy WP";
  public fullName: string = "Holon Energy WP DS 106";
  public text: string = "Holon Energy WP provides Colorless Energy. If the Pokémon that Holon Energy WP is attached to also has a basic Water Energy card attached to it, prevent all effects, excluding damage, done to that Pokémon by your opponent's Pokémon. If the Pokémon that Holon Energy WP is attached to also has a basic Psychic Energy card attached to it, that Pokémon's Retreat Cost is 0. Ignore these effects if Holon Energy WP is attached to Pokémon-ex.";
}
