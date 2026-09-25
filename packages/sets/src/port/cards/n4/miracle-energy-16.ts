import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class MiracleEnergy_16 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "N4";
  public name: string = "Miracle Energy";
  public fullName: string = "Miracle Energy N4 16";
  public text: string = "You can't have more than 1 Miracle Energy in your deck. Attach Miracle Energy to 1 of your Shining or Light Pokémon. At the end of your turn, discard Miracle Energy. While in play, Miracle Energy counts as every type of Energy but provides only 2 Energy at a time.";
}
