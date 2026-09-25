import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class LightningEnergy_130 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "G1";
  public name: string = "Lightning Energy";
  public fullName: string = "Lightning Energy G1 130";
  public text: string = "";
}
