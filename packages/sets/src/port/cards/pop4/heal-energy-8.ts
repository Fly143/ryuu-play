import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class HealEnergy_8 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "POP4";
  public name: string = "Heal Energy";
  public fullName: string = "Heal Energy POP4 8";
  public text: string = "Heal Energy provides Colorless Energy. When you attach this card from your hand to 1 of your Pokémon, remove 1 damage counter and all Special Conditions from that Pokémon. If Heal Energy is attached to Pokémon-ex, Heal Energy has no effect other than providing Energy.";
}
