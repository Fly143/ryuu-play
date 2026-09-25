import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class GrassEnergy_132 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "XY";
  public name: string = "Grass Energy";
  public fullName: string = "Grass Energy XY 132";
  public text: string = "";
}
