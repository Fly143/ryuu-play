import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class DangerousEnergy_82 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BKT";
  public name: string = "Dangerous Energy";
  public fullName: string = "Dangerous Energy BKT 82";
  public text: string = "This card can only be attached to Darkness Pokémon. This card provides Darkness Energy only while this card is attached to a Darkness Pokémon. Whenever the Darkness Pokémon this card is attached to is your Active Pokémon and is damaged by an attack from your opponent's Pokémon-EX (even if that Pokémon is Knocked Out), put 2 damage counters on the Attacking Pokémon-EX. (If this card is attached to anything other than a Darkness Pokémon, discard this card.)";
}
