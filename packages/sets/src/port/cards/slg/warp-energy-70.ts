import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class WarpEnergy_70 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SLG";
  public name: string = "Warp Energy";
  public fullName: string = "Warp Energy SLG 70";
  public text: string = "This card provides Colorless Energy. When you attach this card from your hand to your Active Pokémon, switch that Pokémon with 1 of your Benched Pokémon.";
}
