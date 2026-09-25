import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class CounterEnergy_122 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "CRI";
  public name: string = "Counter Energy";
  public fullName: string = "Counter Energy CRI 122";
  public text: string = "This card provides Colorless Energy. If you have more Prize cards remaining than your opponent, and if this card is attached to a Pokémon that isn't a Pokémon-GX or Pokémon-EX, this card provides every type of Energy but provides only 2 Energy at a time.";
}
