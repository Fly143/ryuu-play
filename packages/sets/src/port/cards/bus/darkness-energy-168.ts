import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class DarknessEnergy_168 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "BUS";
  public name: string = "Darkness Energy";
  public fullName: string = "Darkness Energy BUS 168";
  public text: string = "";
}
