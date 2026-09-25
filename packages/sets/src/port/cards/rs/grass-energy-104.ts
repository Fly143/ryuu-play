import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class GrassEnergy_104 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "RS";
  public name: string = "Grass Energy";
  public fullName: string = "Grass Energy RS 104";
  public text: string = "";
}
