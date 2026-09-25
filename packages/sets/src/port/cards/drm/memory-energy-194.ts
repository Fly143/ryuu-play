import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class MemoryEnergy_194 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "DRM";
  public name: string = "Memory Energy";
  public fullName: string = "Memory Energy DRM 194";
  public text: string = "This card provides Colorless Energy. The Pokémon this card is attached to can use any attack from its previous Evolutions. (You still need the necessary Energy to use each attack.)";
}
