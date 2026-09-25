import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class LightningEnergy_235 extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "CRE";
  public name: string = "Lightning Energy";
  public fullName: string = "Lightning Energy CRE 235";
  public text: string = "";
}
