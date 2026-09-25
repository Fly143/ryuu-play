import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class ShadowyDarknessEnergy_83 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "PBL";
  public name: string = "Shadowy Darkness Energy";
  public fullName: string = "Shadowy Darkness Energy PBL 83";
  public text: string = "As long as this card is attached to a Pokémon, it provides Darkness Energy. As long as the Darkness Pokémon this card is attached to is on your Bench, prevent all damage done to it by attacks from your opponent's Pokémon.";
}
