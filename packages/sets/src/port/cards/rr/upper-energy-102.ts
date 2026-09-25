import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class UpperEnergy_102 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "RR";
  public name: string = "Upper Energy";
  public fullName: string = "Upper Energy RR 102";
  public text: string = "Upper Energy provides Colorless Energy. If you have more Prize cards left than your opponent and this card is attached to a Pokémon (excluding Pokémon LV.X), Upper Energy provides ColorlessColorless.";
}
