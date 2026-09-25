import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class LightningEnergy_10 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "TK1B";
  public name: string = "Lightning Energy";
  public fullName: string = "Lightning Energy TK1B 10";
  public text: string = "";
}
