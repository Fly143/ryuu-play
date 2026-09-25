import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class SingleStrikeEnergy_183 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SHF";
  public name: string = "Single Strike Energy";
  public fullName: string = "Single Strike Energy SHF 183";
  public text: string = "This card can only be attached to a Single Strike Pokémon. If this card is attached to anything other than a Single Strike Pokémon, discard this card. As long as this card is attached to a Pokémon, it provides Fighting and Darkness Energy but provides only 1 Energy at a time, and the attacks of the Pokémon this card is attached to do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).";
}
