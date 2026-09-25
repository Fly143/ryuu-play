import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class DarknessEnergy_111 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BW";
  public name: string = "Darkness Energy";
  public fullName: string = "Darkness Energy BW 111";
  public text: string = "";
}
