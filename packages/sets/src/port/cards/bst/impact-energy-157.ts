import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class ImpactEnergy_157 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BST";
  public name: string = "Impact Energy";
  public fullName: string = "Impact Energy BST 157";
  public text: string = "This card can only be attached to a Single Strike Pokémon. If this card is attached to anything other than a Single Strike Pokémon, discard this card. As long as this card is attached to a Pokémon, it provides every type of Energy but provides only 1 Energy at a time. The Pokémon this card is attached to can't be Poisoned, and if it is already Poisoned, it recovers from that Special Condition.";
}
