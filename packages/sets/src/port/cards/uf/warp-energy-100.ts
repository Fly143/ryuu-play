import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class WarpEnergy_100 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "UF";
  public name: string = "Warp Energy";
  public fullName: string = "Warp Energy UF 100";
  public text: string = "Warp Energy provides Colorless Energy. When you attach this card from your hand to your Active Pokémon, switch that Pokémon with 1 of your Benched Pokémon.";
}
