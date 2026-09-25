import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class LightningEnergy_118 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "HS";
  public name: string = "Lightning Energy";
  public fullName: string = "Lightning Energy HS 118";
  public text: string = "";
}
