import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class MedicalEnergy_182 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "PAR";
  public name: string = "Medical Energy";
  public fullName: string = "Medical Energy PAR 182";
  public text: string = "As long as this card is attached to a Pokémon, it provides Colorless Energy. When you attach this card from your hand to 1 of your Pokémon, heal 30 damage from that Pokémon.";
}
