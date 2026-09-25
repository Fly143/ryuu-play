import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class BasicLightningEnergy_257 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SVI";
  public name: string = "Basic Lightning Energy";
  public fullName: string = "Basic Lightning Energy SVI 257";
  public text: string = "";
}
