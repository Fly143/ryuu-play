import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class ScrambleEnergy_95 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "DX";
  public name: string = "Scramble Energy";
  public fullName: string = "Scramble Energy DX 95";
  public text: string = "Scramble Energy can be attached only to an Evolved Pokémon (excluding Pokémon-ex). Scramble Energy provides Colorless Energy. While in play, if you have more Prize cards left than your opponent, Scramble Energy provides every type of Energy but provides only 3 in any combination at a time. If the Pokémon Scramble Energy is attached to isn't an Evolved Pokémon (or evolves into Pokémon-ex), discard Scramble Energy.";
}
