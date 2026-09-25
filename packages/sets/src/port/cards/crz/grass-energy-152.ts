import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class GrassEnergy_152 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "CRZ";
  public name: string = "Grass Energy";
  public fullName: string = "Grass Energy CRZ 152";
  public text: string = "";
}
