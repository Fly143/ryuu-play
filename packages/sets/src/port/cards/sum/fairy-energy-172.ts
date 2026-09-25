import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class FairyEnergy_172 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SUM";
  public name: string = "Fairy Energy";
  public fullName: string = "Fairy Energy SUM 172";
  public text: string = "";
}
