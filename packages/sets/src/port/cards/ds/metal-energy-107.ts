import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class MetalEnergy_107 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "DS";
  public name: string = "Metal Energy";
  public fullName: string = "Metal Energy DS 107";
  public text: string = "Damage done by attacks to the Pokémon that Metal Energy is attached to is reduced by 10 (after applying Weakness and Resistance). Ignore this effect if the Pokémon that Metal Energy is attached to isn't Metal. Metal Energy provides Metal Energy. (Doesn't count as a basic Energy card.)";
}
