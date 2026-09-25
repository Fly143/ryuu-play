import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class TreasureEnergy_165 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "CRE";
  public name: string = "Treasure Energy";
  public fullName: string = "Treasure Energy CRE 165";
  public text: string = "As long as this card is attached to a Pokémon, it provides Colorless Energy. If you took this card as a face-down Prize card during your turn, before you put it into your hand, you may attach this card to 1 of your Pokémon.";
}
