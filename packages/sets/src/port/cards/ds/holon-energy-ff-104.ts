import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class HolonEnergyFF_104 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "DS";
  public name: string = "Holon Energy FF";
  public fullName: string = "Holon Energy FF DS 104";
  public text: string = "Holon Energy FF provides Colorless Energy. If the Pokémon that Holon Energy FF is attached to also has a basic Fire Energy card attached to it, that Pokémon has no Weakness. If the Pokémon that Holon Energy FF is attached to also has a basic Fighting Energy card attached to it, damage done by that Pokémon's attack isn't affected by Resistance. Ignore these effects if Holon Energy FF is attached to Pokémon-ex.";
}
