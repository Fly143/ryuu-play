import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class GrassEnergy_129 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "G1";
  public name: string = "Grass Energy";
  public fullName: string = "Grass Energy G1 129";
  public text: string = "";
}
