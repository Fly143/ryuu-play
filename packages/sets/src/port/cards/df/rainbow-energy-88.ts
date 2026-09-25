import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class RainbowEnergy_88 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "DF";
  public name: string = "δ Rainbow Energy";
  public fullName: string = "δ Rainbow Energy DF 88";
  public text: string = "δ Rainbow Energy provides Colorless Energy. While attached to a Pokémon that has δ on its card, δ Rainbow Energy provides every type of Energy but provides only 1 Energy at a time. (Has no effect other than providing Energy.)";
}
