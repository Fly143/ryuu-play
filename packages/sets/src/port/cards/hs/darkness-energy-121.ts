import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class DarknessEnergy_121 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "HS";
  public name: string = "Darkness Energy";
  public fullName: string = "Darkness Energy HS 121";
  public text: string = "";
}
