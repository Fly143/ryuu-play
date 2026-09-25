import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class WarpEnergy_147 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "AQ";
  public name: string = "Warp Energy";
  public fullName: string = "Warp Energy AQ 147";
  public text: string = "Warp Energy provides 1 Colorless Energy. When you attach Warp Energy from your hand to your Active Pokémon, switch your Active Pokémon with 1 of your Benched Pokémon.";
}
