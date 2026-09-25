import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class WeaknessGuardEnergy_258 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "CEC";
  public name: string = "Weakness Guard Energy";
  public fullName: string = "Weakness Guard Energy CEC 258";
  public text: string = "This card provides Colorless Energy. The Pokémon this card is attached to has no Weakness.";
}
