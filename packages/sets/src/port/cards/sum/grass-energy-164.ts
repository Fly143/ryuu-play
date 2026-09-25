import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class GrassEnergy_164 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SUM";
  public name: string = "Grass Energy";
  public fullName: string = "Grass Energy SUM 164";
  public text: string = "";
}
