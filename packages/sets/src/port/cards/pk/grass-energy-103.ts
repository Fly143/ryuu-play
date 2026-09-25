import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class GrassEnergy_103 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "PK";
  public name: string = "Grass Energy";
  public fullName: string = "Grass Energy PK 103";
  public text: string = "";
}
