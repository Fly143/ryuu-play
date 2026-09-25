import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class MetalEnergy_163 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SUM";
  public name: string = "Metal Energy";
  public fullName: string = "Metal Energy SUM 163";
  public text: string = "";
}
