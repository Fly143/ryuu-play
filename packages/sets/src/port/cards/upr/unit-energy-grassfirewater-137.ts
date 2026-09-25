import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class UnitEnergyGrassFireWater_137 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "UPR";
  public name: string = "Unit Energy GrassFireWater";
  public fullName: string = "Unit Energy GrassFireWater UPR 137";
  public text: string = "This card provides Colorless Energy. While this card is attached to a Pokémon, it provides Grass, Fire, and Water Energy but provides only 1 Energy at a time.";
}
