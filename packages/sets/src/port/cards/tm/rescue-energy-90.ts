import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class RescueEnergy_90 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "TM";
  public name: string = "Rescue Energy";
  public fullName: string = "Rescue Energy TM 90";
  public text: string = "Rescue Energy provides Colorless Energy. If the Pokémon this card is attached to is Knocked Out by damage from an attack, put that Pokémon back into your hand. (Discard all cards attached to that Pokémon.)";
}
