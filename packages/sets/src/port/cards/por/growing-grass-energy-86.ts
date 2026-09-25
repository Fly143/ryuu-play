import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class GrowingGrassEnergy_86 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "POR";
  public name: string = "Growing Grass Energy";
  public fullName: string = "Growing Grass Energy POR 86";
  public text: string = "As long as this card is attached to a Pokémon, it provides Grass Energy. The Grass Pokémon this card is attached to gets +20 HP.";
}
