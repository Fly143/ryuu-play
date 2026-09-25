import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class BasicGrassEnergy_1 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SVE";
  public name: string = "Basic Grass Energy";
  public fullName: string = "Basic Grass Energy SVE 1";
  public text: string = "";
}
