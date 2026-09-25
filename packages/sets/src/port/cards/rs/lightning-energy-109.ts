import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class LightningEnergy_109 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "RS";
  public name: string = "Lightning Energy";
  public fullName: string = "Lightning Energy RS 109";
  public text: string = "";
}
