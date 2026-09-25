import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FairyEnergy_99 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "EVO";
  public name: string = "Fairy Energy";
  public fullName: string = "Fairy Energy EVO 99";
  public text: string = "";
}
