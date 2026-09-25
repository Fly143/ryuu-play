import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class GrassEnergy_75 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "GEN";
  public name: string = "Grass Energy";
  public fullName: string = "Grass Energy GEN 75";
  public text: string = "";
}
