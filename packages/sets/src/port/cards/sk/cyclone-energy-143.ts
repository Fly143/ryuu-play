import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class CycloneEnergy_143 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SK";
  public name: string = "Cyclone Energy";
  public fullName: string = "Cyclone Energy SK 143";
  public text: string = "This card provides Colorless Energy. When you play this card from your hand and attach it to your Active Pokémon, your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.";
}
