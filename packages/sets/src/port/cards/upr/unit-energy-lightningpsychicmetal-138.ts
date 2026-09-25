import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class UnitEnergyLightningPsychicMetal_138 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "UPR";
  public name: string = "Unit Energy LightningPsychicMetal";
  public fullName: string = "Unit Energy LightningPsychicMetal UPR 138";
  public text: string = "This card provides Colorless Energy. While this card is attached to a Pokémon, it provides Lightning, Psychic, and Metal Energy but provides only 1 Energy at a time.";
}
