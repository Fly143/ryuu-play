import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class StrongEnergy_104 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "FFI";
  public name: string = "Strong Energy";
  public fullName: string = "Strong Energy FFI 104";
  public text: string = "This card can only be attached to Fighting Pokémon. This card provides Fighting Energy only while this card is attached to a Fighting Pokémon. The attacks of the Fighting Pokémon this card is attached to do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance). (If this card is attached to anything other than a Fighting Pokémon, discard this card.)";
}
