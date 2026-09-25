import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class BoomerangEnergy_166 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "TWM";
  public name: string = "Boomerang Energy";
  public fullName: string = "Boomerang Energy TWM 166";
  public text: string = "As long as this card is attached to a Pokémon, it provides Colorless Energy. If this card is discarded by an effect of an attack used by the Pokémon this card is attached to, attach this card from your discard pile to that Pokémon after attacking.";
}
