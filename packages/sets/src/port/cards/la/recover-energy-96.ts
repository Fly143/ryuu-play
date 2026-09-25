import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class RecoverEnergy_96 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "LA";
  public name: string = "Recover Energy";
  public fullName: string = "Recover Energy LA 96";
  public text: string = "Recover Energy provides Colorless Energy. When you attach this card from your hand to 1 of your Pokémon, remove all Special Conditions from that Pokémon.";
}
