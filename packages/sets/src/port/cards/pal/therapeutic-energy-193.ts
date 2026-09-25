import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class TherapeuticEnergy_193 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "PAL";
  public name: string = "Therapeutic Energy";
  public fullName: string = "Therapeutic Energy PAL 193";
  public text: string = "As long as this card is attached to a Pokémon, it provides Colorless Energy.The Pokémon this card is attached to recovers from being Asleep, Confused, or Paralyzed and can't be affected by those Special Conditions.";
}
