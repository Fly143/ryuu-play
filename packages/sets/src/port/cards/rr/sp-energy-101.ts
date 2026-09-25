import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class SPEnergy_101 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "RR";
  public name: string = "SP Energy";
  public fullName: string = "SP Energy RR 101";
  public text: string = "SP Energy provides Colorless Energy. If the Pokémon SP Energy is attached to is a Pokémon SP, SP Energy provides every type of Energy buy provides only 1 Energy at a time. (Doesn't count as a basic Energy card.)";
}
