import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class HolonEnergyGL_105 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "DS";
  public name: string = "Holon Energy GL";
  public fullName: string = "Holon Energy GL DS 105";
  public text: string = "Holon Energy GL provides Colorless Energy. If the Pokémon that Holon Energy GL is attached to also has a basic Grass Energy card attached to it, that Pokémon can't be affected by any Special Conditions. If the Pokémon that Holon Energy GL is attached to also has a basic Lightning Energy card attached to it, damage done by your opponent's Pokémon-ex is reduced by 10. Ignore these effects if Holon Energy GL is attached to Pokémon-ex.";
}
