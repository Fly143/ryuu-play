import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FairyEnergy_169 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BUS";
  public name: string = "Fairy Energy";
  public fullName: string = "Fairy Energy BUS 169";
  public text: string = "";
}
