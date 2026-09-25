import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class LightningEnergy_135 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "XY";
  public name: string = "Lightning Energy";
  public fullName: string = "Lightning Energy XY 135";
  public text: string = "";
}
