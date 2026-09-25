import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class VGuardEnergy_215 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "PGO";
  public name: string = "V Guard Energy";
  public fullName: string = "V Guard Energy PGO 215";
  public text: string = "As long as this card is attached to a Pokémon, it provides Colorless Energy. The Pokémon this card is attached to takes 30 less damage from attacks from your opponent's Pokémon V (after applying Weakness and Resistance). This effect can't be applied more than once at a time to the same Pokémon.";
}
