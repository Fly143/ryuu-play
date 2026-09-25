import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class TeamRocketSEnergy_182 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "DRI";
  public name: string = "Team Rocket's Energy";
  public fullName: string = "Team Rocket's Energy DRI 182";
  public text: string = "This card can only be attached to a Team Rocket's Pokémon. If this card is attached to anything other than a Team Rocket's Pokémon, discard this card. As long as this card is attached to a Pokémon, it provides 2 in any combination of Psychic Energy and Darkness Energy.";
}
