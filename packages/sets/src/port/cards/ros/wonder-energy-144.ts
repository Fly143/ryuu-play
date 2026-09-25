import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class WonderEnergy_144 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "ROS";
  public name: string = "Wonder Energy";
  public fullName: string = "Wonder Energy ROS 144";
  public text: string = "This card can only be attached to Fairy Pokémon. This card provides Fairy Energy only while this card is attached to a Fairy Pokémon. Prevent all effects of your opponent's attacks, except damage, done to the Fairy Pokémon that this card is attached to. (Existing effects are not removed.) (If this card is attached to anything other than a Fairy Pokémon, discard this card.)";
}
