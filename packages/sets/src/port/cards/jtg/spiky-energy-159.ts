import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class SpikyEnergy_159 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "JTG";
  public name: string = "Spiky Energy";
  public fullName: string = "Spiky Energy JTG 159";
  public text: string = "As long as this card is attached to a Pokémon, it provides Colorless Energy. If the Pokémon this card is attached to is in the Active Spot and is damaged by an attack from your opponent's Pokémon (even if this Pokémon is Knocked Out), put 2 damage counters on the Attacking Pokémon.";
}
