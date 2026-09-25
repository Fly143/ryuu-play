import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class StoneFightingEnergy_164 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "VIV";
  public name: string = "Stone Fighting Energy";
  public fullName: string = "Stone Fighting Energy VIV 164";
  public text: string = "As long as this card is attached to a Pokémon, it provides Fighting Energy. The Fighting Pokémon this card is attached to takes 20 less damage from attacks from your opponent's Pokémon (after applying Weakness and Resistance).";
}
