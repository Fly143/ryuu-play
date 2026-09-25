import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class JetEnergy_252 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SSP";
  public name: string = "Jet Energy";
  public fullName: string = "Jet Energy SSP 252";
  public text: string = "As long as this card is attached to a Pokémon, it provides Colorless Energy. When you attach this card from your hand to 1 of your Benched Pokémon, switch that Pokémon with your Active Pokémon.";
}
