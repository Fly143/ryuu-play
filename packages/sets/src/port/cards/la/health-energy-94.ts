import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class HealthEnergy_94 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "LA";
  public name: string = "Health Energy";
  public fullName: string = "Health Energy LA 94";
  public text: string = "Health Energy provides Colorless Energy. When you attach this card from your hand to 1 of your Pokémon, remove 1 damage counter from that Pokémon.";
}
