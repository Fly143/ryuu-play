import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class MetalEnergy_19 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "N1";
  public name: string = "Metal Energy";
  public fullName: string = "Metal Energy N1 19";
  public text: string = "Damage done to the Pokémon Metal Energy is attached to is reduced by 10 (after applying Weakness and Resistance). If the Pokémon Metal Energy is attached to isn't Metal, whenever it damages a Pokémon, reduce that damage by 10 (before applying Weakness and Resistance). Metal Energy provides Metal Energy. (Doesn't count as a basic Energy card.)";
}
