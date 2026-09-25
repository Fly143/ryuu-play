import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class GrassEnergy_99 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BS";
  public name: string = "Grass Energy";
  public fullName: string = "Grass Energy BS 99";
  public text: string = "";
}
