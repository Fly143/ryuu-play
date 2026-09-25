import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class MagneticMetalEnergy_85 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "CRI";
  public name: string = "Magnetic Metal Energy";
  public fullName: string = "Magnetic Metal Energy CRI 85";
  public text: string = "As long as this card is attached to a Pokémon, it provides Metal Energy. The Metal Pokémon this card is attached to has no Retreat Cost.";
}
