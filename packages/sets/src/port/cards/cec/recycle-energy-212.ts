import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class RecycleEnergy_212 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "CEC";
  public name: string = "Recycle Energy";
  public fullName: string = "Recycle Energy CEC 212";
  public text: string = "This card provides Colorless Energy. If this card is discarded from play, put it into your hand instead of the discard pile.";
}
