import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FullHealEnergy_100 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "G2";
  public name: string = "Full Heal Energy";
  public fullName: string = "Full Heal Energy G2 100";
  public text: string = "If you play this card from your hand, the Pokémon you attach it to is no longer affected by a Special Condition. Full Heal Energy provides Colorless energy. (Doesn't count as a basic Energy card.)";
}
