import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class BlendEnergyGrassFirePsychicDarkness_117 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BCR";
  public name: string = "Blend Energy GrassFirePsychicDarkness";
  public fullName: string = "Blend Energy GrassFirePsychicDarkness BCR 117";
  public text: string = "This card provides Colorless Energy. When this card is attached to a Pokémon, this card provides Grass, Fire, Psychic, or Darkness Energy but provides only 1 Energy at a time.";
}
