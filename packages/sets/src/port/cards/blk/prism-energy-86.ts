import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class PrismEnergy_86 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BLK";
  public name: string = "Prism Energy";
  public fullName: string = "Prism Energy BLK 86";
  public text: string = "As long as this card is attached to a Pokémon, it provides Colorless Energy. If this card is attached to a Basic Pokémon, this card provides every type of Energy but provides only 1 Energy at a time.";
}
