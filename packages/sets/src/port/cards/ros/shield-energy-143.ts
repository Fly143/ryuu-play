import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class ShieldEnergy_143 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "ROS";
  public name: string = "Shield Energy";
  public fullName: string = "Shield Energy ROS 143";
  public text: string = "This card can only be attached to Metal Pokémon. This card provides Metal Energy only while this card is attached to a Metal Pokémon. The attacks of your opponent's Pokémon do 10 less damage to the Metal Pokémon this card is attached to (before applying Weakness and Resistance). (If this card is attached to anything other than a Metal Pokémon, discard this card.)";
}
