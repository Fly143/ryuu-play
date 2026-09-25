import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class LightningEnergy_155 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "CRZ";
  public name: string = "Lightning Energy";
  public fullName: string = "Lightning Energy CRZ 155";
  public text: string = "";
}
