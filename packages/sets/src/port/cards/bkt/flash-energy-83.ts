import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FlashEnergy_83 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BKT";
  public name: string = "Flash Energy";
  public fullName: string = "Flash Energy BKT 83";
  public text: string = "This card can only be attached to Lightning Pokémon. This card provides Lightning Energy only while this card is attached to a Lightning Pokémon. The Lightning Pokémon this card is attached to has no Weakness. (If this card is attached to anything other than a Lightning Pokémon, discard this card.)";
}
