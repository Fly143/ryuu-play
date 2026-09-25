import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class HidingDarknessEnergy_175 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "DAA";
  public name: string = "Hiding Darkness Energy";
  public fullName: string = "Hiding Darkness Energy DAA 175";
  public text: string = "As long as this card is attached to a Pokémon, it provides Darkness Energy. The Darkness Pokémon this card is attached to has no Retreat Cost.";
}
