import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class WarpEnergy_91 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "PK";
  public name: string = "Warp Energy";
  public fullName: string = "Warp Energy PK 91";
  public text: string = "Warp Energy provides Colorless Energy. When you attach this card from your hand to your Active Pokémon, switch that Pokémon with 1 of your Benched Pokémon.";
}
