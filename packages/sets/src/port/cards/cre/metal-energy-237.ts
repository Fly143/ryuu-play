import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class MetalEnergy_237 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "CRE";
  public name: string = "Metal Energy";
  public fullName: string = "Metal Energy CRE 237";
  public text: string = "";
}
