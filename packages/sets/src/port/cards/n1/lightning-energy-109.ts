import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class LightningEnergy_1092 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "N1";
  public name: string = "Lightning Energy";
  public fullName: string = "Lightning Energy N1 109";
  public text: string = "";
}
