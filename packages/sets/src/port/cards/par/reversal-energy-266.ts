import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class ReversalEnergy_266 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "PAR";
  public name: string = "Reversal Energy";
  public fullName: string = "Reversal Energy PAR 266";
  public text: string = "As long as this card is attached to a Pokémon, it provides Colorless Energy. If you have more Prize cards remaining than your opponent, and if this card is attached to an Evolution Pokémon that doesn't have a Rule Box (Pokémon ex, Pokémon V, etc. have Rule Boxes), this card provides every type of Energy but provides only 3 Energy at a time.";
}
