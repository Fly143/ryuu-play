import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class GrassEnergy_283 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "EVS";
  public name: string = "Grass Energy";
  public fullName: string = "Grass Energy EVS 283";
  public text: string = "";
}
