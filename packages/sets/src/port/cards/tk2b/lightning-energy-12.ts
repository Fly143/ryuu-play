import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class LightningEnergy_12 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "TK2B";
  public name: string = "Lightning Energy";
  public fullName: string = "Lightning Energy TK2B 12";
  public text: string = "";
}
