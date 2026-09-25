import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class SpiralEnergy_159 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BST";
  public name: string = "Spiral Energy";
  public fullName: string = "Spiral Energy BST 159";
  public text: string = "This card can only be attached to a Rapid Strike Pokémon. If this card is attached to anything other than a Rapid Strike Pokémon, discard this card. As long as this card is attached to a Pokémon, it provides every type of Energy but provides only 1 Energy at a time. The Pokémon this card is attached to can't be Paralyzed, and if it is already Paralyzed, it recovers from that Special Condition.";
}
