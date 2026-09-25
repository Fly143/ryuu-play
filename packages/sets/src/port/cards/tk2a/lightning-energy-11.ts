import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class LightningEnergy_11 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "TK2A";
  public name: string = "Lightning Energy";
  public fullName: string = "Lightning Energy TK2A 11";
  public text: string = "";
}
