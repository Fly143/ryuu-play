import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class BoostEnergy_8 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "POP5";
  public name: string = "Boost Energy";
  public fullName: string = "Boost Energy POP5 8";
  public text: string = "Boost Energy can be attached only to an Evolved Pokémon. Discard Boost Energy at the end of the turn it was attached. Boost Energy provides ColorlessColorlessColorless Energy. The Pokémon Boost Energy is attached to can't retreat. If the Pokémon Boost Energy is attached to isn't an Evolved Pokémon, discard Boost Energy.";
}
