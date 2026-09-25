import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class LightningEnergy_128 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "JU";
  public name: string = "Lightning Energy";
  public fullName: string = "Lightning Energy JU 128";
  public text: string = "";
}
