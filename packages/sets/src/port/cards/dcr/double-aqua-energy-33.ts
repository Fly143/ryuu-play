import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class DoubleAquaEnergy_33 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "DCR";
  public name: string = "Double Aqua Energy";
  public fullName: string = "Double Aqua Energy DCR 33";
  public text: string = "This card can only be attached to Team Aqua Pokémon. Discard this card at the end of the turn you attached it. This card provides WaterWater Energy only while it is attached to a Team Aqua Pokémon. (If this card is attached to anything other than a Team Aqua Pokémon, discard this card.)";
}
