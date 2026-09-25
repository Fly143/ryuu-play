import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class LightningEnergy_78 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "GEN";
  public name: string = "Lightning Energy";
  public fullName: string = "Lightning Energy GEN 78";
  public text: string = "";
}
