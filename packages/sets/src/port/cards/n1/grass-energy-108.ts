import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class GrassEnergy_108 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "N1";
  public name: string = "Grass Energy";
  public fullName: string = "Grass Energy N1 108";
  public text: string = "";
}
