import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class DarknessEnergy_103 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "DS";
  public name: string = "Darkness Energy";
  public fullName: string = "Darkness Energy DS 103";
  public text: string = "If the Pokémon Darkness Energy is attached to attacks, the attack does 10 more damage to the Active Pokémon (before applying Weakness and Resistance). Ignore this effect unless the Attacking Pokémon is Darkness or has Dark in its name. Darkness Energy provides Darkness Energy. (Doesn't count as a basic Energy card.)";
}
