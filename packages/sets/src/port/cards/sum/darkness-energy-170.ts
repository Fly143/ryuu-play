import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class DarknessEnergy_170 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SUM";
  public name: string = "Darkness Energy";
  public fullName: string = "Darkness Energy SUM 170";
  public text: string = "";
}
