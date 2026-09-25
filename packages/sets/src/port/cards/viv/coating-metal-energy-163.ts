import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class CoatingMetalEnergy_163 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "VIV";
  public name: string = "Coating Metal Energy";
  public fullName: string = "Coating Metal Energy VIV 163";
  public text: string = "As long as this card is attached to a Pokémon, it provides Metal Energy. The Metal Pokémon this card is attached to has no Weakness.";
}
