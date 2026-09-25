import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class DarknessEnergy_142 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "AQ";
  public name: string = "Darkness Energy";
  public fullName: string = "Darkness Energy AQ 142";
  public text: string = "If the Pokémon Darkness Energy is attached to damages the Defending Pokémon (after applying Weakness and Resistance), the attack does 10 more damage to the Defending Pokémon. At the end of every turn, put 1 damage counter on the Pokémon Darkness Energy is attached to, unless it's Darkness or has Dark in its name. Darkness Energy provides Darkness Energy. (Doesn't count as a basic Energy card.)";
}
