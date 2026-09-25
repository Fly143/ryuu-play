import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class CallEnergy_92 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "LA";
  public name: string = "Call Energy";
  public fullName: string = "Call Energy LA 92";
  public text: string = "Call Energy provides Colorless Energy. Once during your turn, if the Pokémon Call Energy is attached to is your Active Pokémon, you may search your deck for up to 2 Basic Pokémon and put them onto your Bench. If you do, shuffle your deck and your turn ends.";
}
