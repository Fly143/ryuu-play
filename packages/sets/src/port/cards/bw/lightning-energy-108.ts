import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class LightningEnergy_108 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BW";
  public name: string = "Lightning Energy";
  public fullName: string = "Lightning Energy BW 108";
  public text: string = "";
}
