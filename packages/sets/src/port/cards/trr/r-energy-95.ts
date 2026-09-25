import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class REnergy_95 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "TRR";
  public name: string = "R Energy";
  public fullName: string = "R Energy TRR 95";
  public text: string = "R Energy can be attached only to a Pokémon that has Dark or Rocket's in its name. While in play, R Energy provides 2 Darkness Energy. (Doesn't count as a basic Energy card.) If the Pokémon R Energy is attached to attacks, the attack does 10 more damage to the Active Pokémon (before applying Weakness and Resistance). When your turn ends, discard R Energy.";
}
