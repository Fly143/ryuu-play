import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class BasicLightningEnergy_4 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SVE";
  public name: string = "Basic Lightning Energy";
  public fullName: string = "Basic Lightning Energy SVE 4";
  public text: string = "";
}
