import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class BounceEnergy_142 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SK";
  public name: string = "Bounce Energy";
  public fullName: string = "Bounce Energy SK 142";
  public text: string = "This card provides ColorlessColorless Energy. You can attach this card to your Pokémon that has basic Energy cards attached to it. When you play this card from your hand and attach it to 1 of your Pokémon, return a basic Energy card attached to that Pokémon to your hand.";
}
