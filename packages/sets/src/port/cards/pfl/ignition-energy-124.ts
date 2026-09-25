import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class IgnitionEnergy_124 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "PFL";
  public name: string = "Ignition Energy";
  public fullName: string = "Ignition Energy PFL 124";
  public text: string = "If this card is attached to 1 of your Pokémon, discard it at the end of your turn. As long as this card is attached to a Pokémon, it provides Colorless Energy. If this card is attached to an Evolution Pokémon, it provides ColorlessColorlessColorless Energy instead.";
}
