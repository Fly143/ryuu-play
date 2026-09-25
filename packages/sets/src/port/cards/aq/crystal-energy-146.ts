import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class CrystalEnergy_146 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "AQ";
  public name: string = "Crystal Energy";
  public fullName: string = "Crystal Energy AQ 146";
  public text: string = "Crystal Energy provides 1 Energy of all types (colors) of basic Energy cards attached to the Pokémon Crystal Energy is attached to. If there are no basic Energy cards attached to the Pokémon Crystal Energy is attached to, Crystal Energy provides Colorless Energy.";
}
