import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class MetalEnergy_112 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BW";
  public name: string = "Metal Energy";
  public fullName: string = "Metal Energy BW 112";
  public text: string = "";
}
