import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class GrassEnergy_91 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "EVO";
  public name: string = "Grass Energy";
  public fullName: string = "Grass Energy EVO 91";
  public text: string = "";
}
