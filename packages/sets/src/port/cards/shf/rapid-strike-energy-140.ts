import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class RapidStrikeEnergy_140 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SHF";
  public name: string = "Rapid Strike Energy";
  public fullName: string = "Rapid Strike Energy SHF 140";
  public text: string = "This card can only be attached to a Rapid Strike Pokémon. If this card is attached to anything other than a Rapid Strike Pokémon, discard this card. As long as this card is attached to a Pokémon, it provides 2 in any combination of Water Energy and Fighting Energy.";
}
