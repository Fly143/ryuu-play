import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class VoltaicLightningEnergy_84 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "PBL";
  public name: string = "Voltaic Lightning Energy";
  public fullName: string = "Voltaic Lightning Energy PBL 84";
  public text: string = "As long as this card is attached to a Pokémon, it provides Lightning Energy. Attacks used by the Lightning Pokémon this card is attached to do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).";
}
