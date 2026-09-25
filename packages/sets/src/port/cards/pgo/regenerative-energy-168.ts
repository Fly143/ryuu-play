import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class RegenerativeEnergy_168 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "PGO";
  public name: string = "Regenerative Energy";
  public fullName: string = "Regenerative Energy PGO 168";
  public text: string = "As long as this card is attached to a Pokémon, it provides Colorless Energy. Whenever you play a Pokémon from your hand to evolve the Pokémon V this card is attached to, heal 100 damage from that Pokémon.";
}
