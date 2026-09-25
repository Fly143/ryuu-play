import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class GrassEnergy_1292 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "G2";
  public name: string = "Grass Energy";
  public fullName: string = "Grass Energy G2 129";
  public text: string = "";
}
