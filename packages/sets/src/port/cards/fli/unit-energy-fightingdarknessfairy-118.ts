import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class UnitEnergyFightingDarknessFairy_118 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "FLI";
  public name: string = "Unit Energy FightingDarknessFairy";
  public fullName: string = "Unit Energy FightingDarknessFairy FLI 118";
  public text: string = "This card provides Colorless Energy. While this card is attached to a Pokémon, it provides Fighting, Darkness, and Fairy Energy but provides only 1 Energy at a time.";
}
