import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class LightningEnergy_168 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "GRI";
  public name: string = "Lightning Energy";
  public fullName: string = "Lightning Energy GRI 168";
  public text: string = "";
}
