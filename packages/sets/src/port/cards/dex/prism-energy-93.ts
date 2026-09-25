import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class PrismEnergy_93 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "DEX";
  public name: string = "Prism Energy";
  public fullName: string = "Prism Energy DEX 93";
  public text: string = "This card provides Colorless Energy. If the Pokémon this card is attached to is a Basic Pokémon, this card provides every type of Energy but provides only 1 Energy at a time.";
}
