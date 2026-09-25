import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class GrassEnergy_162 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "EX";
  public name: string = "Grass Energy";
  public fullName: string = "Grass Energy EX 162";
  public text: string = "";
}
