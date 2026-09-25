import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class DarknessEnergy_97 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "EVO";
  public name: string = "Darkness Energy";
  public fullName: string = "Darkness Energy EVO 97";
  public text: string = "";
}
