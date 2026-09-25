import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class DoubleMagmaEnergy_34 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "DCR";
  public name: string = "Double Magma Energy";
  public fullName: string = "Double Magma Energy DCR 34";
  public text: string = "This card can only be attached to Team Magma Pokémon. Discard this card at the end of the turn you attached it. This card provides FightingFighting Energy only while it is attached to a Team Magma Pokémon. (If this card is attached to anything other than a Team Magma Pokémon, discard this card.)";
}
