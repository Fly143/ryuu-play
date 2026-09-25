import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class MultiEnergy_93 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SS";
  public name: string = "Multi Energy";
  public fullName: string = "Multi Energy SS 93";
  public text: string = "Attach Multi Energy to 1 of your Pokémon. While in play, Multi Energy provides every type of Energy but provides only 1 Energy at a time. (Doesn't count as a basic Energy card when not in play.) Multi energy provides Colorless Energy when attached to a Pokémon that already has Special Energy cards attached to it.";
}
