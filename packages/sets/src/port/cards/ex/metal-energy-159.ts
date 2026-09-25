import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class MetalEnergy_159 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "EX";
  public name: string = "Metal Energy";
  public fullName: string = "Metal Energy EX 159";
  public text: string = "Damage done by attacks to the Pokémon Metal Energy is attached to is reduced by 10 (after applying Weakness and Resistance). If the Pokémon Metal Energy is attached to isn't Metal, whenever it damages a Pokémon by an attack, reduce that damage by 10 (after applying Weakness and Resistance). Metal Energy provides Metal Energy. (Doesn't count as a basic Energy card.)";
}
