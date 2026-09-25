import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class GrassEnergy_101 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "EM";
  public name: string = "Grass Energy";
  public fullName: string = "Grass Energy EM 101";
  public text: string = "";
}
