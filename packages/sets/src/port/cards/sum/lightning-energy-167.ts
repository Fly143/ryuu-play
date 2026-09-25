import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class LightningEnergy_167 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SUM";
  public name: string = "Lightning Energy";
  public fullName: string = "Lightning Energy SUM 167";
  public text: string = "";
}
