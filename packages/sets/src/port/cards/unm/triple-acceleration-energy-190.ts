import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class TripleAccelerationEnergy_190 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "UNM";
  public name: string = "Triple Acceleration Energy";
  public fullName: string = "Triple Acceleration Energy UNM 190";
  public text: string = "This card can only be attached to Evolution Pokémon. If this card is attached to 1 of your Pokémon, discard it at the end of the turn. This card provides ColorlessColorlessColorless Energy only while it is attached to an Evolution Pokémon. If this card is attached to anything other than an Evolution Pokémon, discard this card.";
}
