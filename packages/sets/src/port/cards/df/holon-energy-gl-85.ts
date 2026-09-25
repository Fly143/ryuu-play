import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class HolonEnergyGL_85 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "DF";
  public name: string = "Holon Energy GL";
  public fullName: string = "Holon Energy GL DF 85";
  public text: string = "Holon Energy GL provides Colorless Energy. If the Pokémon that Holon Energy GL is attached to also has a basic Grass Energy card attached to it, that Pokémon can't be affected by any Special Conditions. If the Pokémon that Holon Energy GL is attached to also has a basic Lightning Energy card attached to it, damage done to that Pokémon by attacks from your opponent's Pokémon-ex is reduced by 10. Ignore these effects if Holon Energy GL is attached to Pokémon-ex.";
}
