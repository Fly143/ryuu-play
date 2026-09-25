import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class PotionEnergy_82 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "TR";
  public name: string = "Potion Energy";
  public fullName: string = "Potion Energy TR 82";
  public text: string = "If you play this card from your hand, remove 1 damage counter from the Pokémon you attach it to, if it has any. Potion Energy provides Colorless energy. (Doesn't count as a basic Energy card.)";
}
