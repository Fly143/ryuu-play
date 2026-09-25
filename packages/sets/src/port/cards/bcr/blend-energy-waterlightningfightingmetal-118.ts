import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class BlendEnergyWaterLightningFightingMetal_118 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BCR";
  public name: string = "Blend Energy WaterLightningFightingMetal";
  public fullName: string = "Blend Energy WaterLightningFightingMetal BCR 118";
  public text: string = "This card provides Colorless Energy. When this card is attached to a Pokémon, this card provides Water, Lightning, Fighting, or Metal Energy but provides only 1 Energy at a time.";
}
