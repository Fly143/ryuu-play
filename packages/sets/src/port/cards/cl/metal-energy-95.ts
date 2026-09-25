import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class MetalEnergy_95 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "CL";
  public name: string = "Metal Energy";
  public fullName: string = "Metal Energy CL 95";
  public text: string = "";
}
