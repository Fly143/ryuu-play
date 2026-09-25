import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class AromaticGrassEnergy_162 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "VIV";
  public name: string = "Aromatic Grass Energy";
  public fullName: string = "Aromatic Grass Energy VIV 162";
  public text: string = "As long as this card is attached to a Pokémon, it provides Grass Energy. The Grass Pokémon this card is attached to recovers from all Special Conditions and can't be affected by any Special Conditions.";
}
