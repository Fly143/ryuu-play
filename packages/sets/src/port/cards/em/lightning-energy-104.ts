import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class LightningEnergy_104 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "EM";
  public name: string = "Lightning Energy";
  public fullName: string = "Lightning Energy EM 104";
  public text: string = "";
}
