import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class DarknessEnergy_81 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "GEN";
  public name: string = "Darkness Energy";
  public fullName: string = "Darkness Energy GEN 81";
  public text: string = "";
}
