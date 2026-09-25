import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class DarknessEnergy_86 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "CL";
  public name: string = "Darkness Energy";
  public fullName: string = "Darkness Energy CL 86";
  public text: string = "If the Pokémon Darkness Energy is attached to attacks, the attack does 10 more damage to the Active Pokémon (before applying Weakness and Resistance). Ignore this Effect if the Pokémon that Darkness Energy is attached to isn't Darkness. Darkness Energy provides Darkness Energy. (Doesn't count as a basic Energy card.)";
}
