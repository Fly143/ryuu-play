import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class MetalEnergy_82 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "GEN";
  public name: string = "Metal Energy";
  public fullName: string = "Metal Energy GEN 82";
  public text: string = "";
}
