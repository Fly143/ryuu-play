import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class GrassEnergy_88 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "CL";
  public name: string = "Grass Energy";
  public fullName: string = "Grass Energy CL 88";
  public text: string = "";
}
