import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class RecycleEnergy_105 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "N1";
  public name: string = "Recycle Energy";
  public fullName: string = "Recycle Energy N1 105";
  public text: string = "Recycle Energy provides Colorless Energy. (Doesn't count as a basic Energy card.) If this card is put into your discard pile from play, return it to your hand.";
}
