import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class RockyFightingEnergy_87 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "POR";
  public name: string = "Rocky Fighting Energy";
  public fullName: string = "Rocky Fighting Energy POR 87";
  public text: string = "As long as this card is attached to a Pokémon, it provides Fighting Energy. Prevent all effects of attacks used by your opponent's Pokémon done to the Fighting Pokémon this card is attached to. (Existing effects are not removed. Damage is not an effect.)";
}
