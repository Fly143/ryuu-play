import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class MetalEnergy_98 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "EVO";
  public name: string = "Metal Energy";
  public fullName: string = "Metal Energy EVO 98";
  public text: string = "";
}
