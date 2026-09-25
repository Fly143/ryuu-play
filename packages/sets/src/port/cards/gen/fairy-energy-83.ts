import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FairyEnergy_83 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "GEN";
  public name: string = "Fairy Energy";
  public fullName: string = "Fairy Energy GEN 83";
  public text: string = "";
}
