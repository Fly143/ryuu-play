import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class LightningEnergy_163 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "EX";
  public name: string = "Lightning Energy";
  public fullName: string = "Lightning Energy EX 163";
  public text: string = "";
}
