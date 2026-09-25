import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class LightningEnergy_106 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "PK";
  public name: string = "Lightning Energy";
  public fullName: string = "Lightning Energy PK 106";
  public text: string = "";
}
