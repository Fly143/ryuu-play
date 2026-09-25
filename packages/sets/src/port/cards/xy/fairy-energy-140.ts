import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FairyEnergy_140 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "XY";
  public name: string = "Fairy Energy";
  public fullName: string = "Fairy Energy XY 140";
  public text: string = "";
}
