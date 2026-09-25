import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class HeatFireEnergy_174 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "DAA";
  public name: string = "Heat Fire Energy";
  public fullName: string = "Heat Fire Energy DAA 174";
  public text: string = "As long as this card is attached to a Pokémon, it provides Fire Energy. The Fire Pokémon this card is attached to gets +20 HP.";
}
