import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class DoubleTurboEnergy_216 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BRS";
  public name: string = "Double Turbo Energy";
  public fullName: string = "Double Turbo Energy BRS 216";
  public text: string = "As long as this card is attached to a Pokémon, it provides ColorlessColorless Energy. The attacks of the Pokémon this card is attached to do 20 less damage to your opponent's Pokémon (before applying Weakness and Resistance).";
}
