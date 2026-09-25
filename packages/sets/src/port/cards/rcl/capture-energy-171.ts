import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class CaptureEnergy_171 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "RCL";
  public name: string = "Capture Energy";
  public fullName: string = "Capture Energy RCL 171";
  public text: string = "As long as this card is attached to a Pokémon, it provides Colorless Energy. When you attach this card from your hand to a Pokémon, search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck.";
}
