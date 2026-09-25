import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class BurningEnergy_151 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BKP";
  public name: string = "Burning Energy";
  public fullName: string = "Burning Energy BKP 151";
  public text: string = "This card can only be attached to Fire Pokémon. This card provides Fire Energy only while this card is attached to a Fire Pokémon. If this card is discarded by an attack of the Fire Pokémon this card is attached to, attach this card from your discard pile to that Pokémon after attacking. (If this card is attached to anything other than a Fire Pokémon, discard this card.)";
}
