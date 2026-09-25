import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class BubblyWaterEnergy_84 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "CRI";
  public name: string = "Bubbly Water Energy";
  public fullName: string = "Bubbly Water Energy CRI 84";
  public text: string = "As long as this card is attached to a Pokémon, it provides Water Energy. The Water Pokémon this card is attached to recovers from all Special Conditions and can't be affected by any Special Conditions.";
}
