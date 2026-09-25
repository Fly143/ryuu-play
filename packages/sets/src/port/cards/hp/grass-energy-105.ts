import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class GrassEnergy_1052 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "HP";
  public name: string = "Grass Energy";
  public fullName: string = "Grass Energy HP 105";
  public text: string = "";
}
