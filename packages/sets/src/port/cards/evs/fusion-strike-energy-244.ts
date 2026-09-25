import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FusionStrikeEnergy_244 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "EVS";
  public name: string = "Fusion Strike Energy";
  public fullName: string = "Fusion Strike Energy EVS 244";
  public text: string = "This card can only be attached to a Fusion Strike Pokémon. If this card is attached to anything other than a Fusion Strike Pokémon, discard this card. As long as this card is attached to a Pokémon, it provides every type of Energy but provides only 1 Energy at a time. Prevent all effects of your opponent's Pokémon's Abilities done to the Pokémon this card is attached to.";
}
