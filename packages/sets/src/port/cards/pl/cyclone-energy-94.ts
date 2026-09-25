import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class CycloneEnergy_94 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "PL";
  public name: string = "Cyclone Energy";
  public fullName: string = "Cyclone Energy PL 94";
  public text: string = "Cyclone Energy provides Colorless Energy. When you attach this card from your hand to your Active Pokémon, switch 1 of the Defending Pokémon with 1 of your opponent's Benched Pokémon. Your opponent chooses the Benched Pokémon to switch.";
}
