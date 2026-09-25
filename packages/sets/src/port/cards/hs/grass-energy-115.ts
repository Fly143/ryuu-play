import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class GrassEnergy_115 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "HS";
  public name: string = "Grass Energy";
  public fullName: string = "Grass Energy HS 115";
  public text: string = "";
}
