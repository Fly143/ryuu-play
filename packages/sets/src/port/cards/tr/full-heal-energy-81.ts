import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FullHealEnergy_81 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "TR";
  public name: string = "Full Heal Energy";
  public fullName: string = "Full Heal Energy TR 81";
  public text: string = "If you play this card from your hand, the Pokémon you attach it to is no longer Asleep, Confused, Paralyzed, or Poisoned. Full Heal Energy provides Colorless energy. (Doesn't count as a basic Energy card.)";
}
