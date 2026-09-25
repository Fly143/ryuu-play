import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class MetalEnergy_1592 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "CRZ";
  public name: string = "Metal Energy";
  public fullName: string = "Metal Energy CRZ 159";
  public text: string = "";
}
