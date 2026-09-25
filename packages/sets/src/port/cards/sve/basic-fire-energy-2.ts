import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class BasicFireEnergy_2 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "SVE";
  public name: string = "Basic Fire Energy";
  public fullName: string = "Basic Fire Energy SVE 2";
  public text: string = "";
}
