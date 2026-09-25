import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class HealEnergy_94 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "DX";
  public name: string = "Heal Energy";
  public fullName: string = "Heal Energy DX 94";
  public text: string = "Heal Energy provides Colorless Energy. When you attach this card from your hand to 1 of your Pokémon, remove 1 damage counter and all Special Conditions from that Pokémon. If Heal Energy is attached to Pokémon-ex, Heal Energy has no effect other than providing Energy.";
}
