import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class HorrorPsychicEnergy_172 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "RCL";
  public name: string = "Horror Psychic Energy";
  public fullName: string = "Horror Psychic Energy RCL 172";
  public text: string = "As long as this card is attached to a Pokémon, it provides Psychic Energy. If the Psychic Pokémon this card is attached to is in the Active Spot and is damaged by an opponent's attack (even if it is Knocked Out), put 2 damage counters on the Attacking Pokémon.";
}
