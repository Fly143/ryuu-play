import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class DoubleRainbowEnergy_87 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "EM";
  public name: string = "Double Rainbow Energy";
  public fullName: string = "Double Rainbow Energy EM 87";
  public text: string = "Double Rainbow Energy can be attached only to an Evolved Pokémon (excluding Pokémon-ex). While in play, Double Rainbow Energy provides every type of Energy but provides 2 Energy at a time. (Has no effect other than providing Energy.) Damage done to your opponent's Pokémon by the Pokémon Double Rainbow Energy is attached to is reduced by 10 (before applying Weakness and Resistance). When the Pokémon Double Rainbow Energy is attached to is no longer an Evolved Pokémon, discard Double Rainbow Energy.";
}
