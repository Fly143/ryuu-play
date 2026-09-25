import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class RetroEnergy_144 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SK";
  public name: string = "Retro Energy";
  public fullName: string = "Retro Energy SK 144";
  public text: string = "This card provides Colorless Energy. When you play this card from your hand and attach it to 1 of your Evolved Pokémon, you may remove up to 2 damage counters from that Pokémon and discard the top card from it. (This counts as devolving it.)";
}
