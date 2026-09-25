import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class MultiEnergy_118 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "MT";
  public name: string = "Multi Energy";
  public fullName: string = "Multi Energy MT 118";
  public text: string = "Attach Multi Energy to 1 of your Pokémon. While in play, Multi Energy provides every type of Energy but provides only 1 Energy at a time. (Has no effect other than providing Energy.) Multi Energy provides Colorless Energy when attached to a Pokémon that already has Special Energy cards attached to it.";
}
