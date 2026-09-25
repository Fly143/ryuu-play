import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class DarkMetalEnergy_94 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "TRR";
  public name: string = "Dark Metal Energy";
  public fullName: string = "Dark Metal Energy TRR 94";
  public text: string = "Attach Dark Metal Energy to 1 of your Pokémon. While in play, Dark Metal Energy provides Darkness Energy and Metal Energy, but provides only 1 Energy at a time. (Doesn't count as a basic Energy card when not in play and has no effect other than providing Energy.)";
}
