import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class SpeedLightningEnergy_173 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "RCL";
  public name: string = "Speed Lightning Energy";
  public fullName: string = "Speed Lightning Energy RCL 173";
  public text: string = "As long as this card is attached to a Pokémon, it provides Lightning Energy. When you attach this card from your hand to a Lightning Pokémon, draw 2 cards.";
}
