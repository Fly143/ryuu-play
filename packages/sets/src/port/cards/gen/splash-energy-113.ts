import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class SplashEnergy_113 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "GEN";
  public name: string = "Splash Energy";
  public fullName: string = "Splash Energy GEN 113";
  public text: string = "This card can only be attached to Water Pokémon. This card provides Water Energy only while this card is attached to a Water Pokémon. If the Water Pokémon this card is attached to is Knocked Out by damage from an opponent's attack, put that Pokémon into your hand. (Discard all cards attached to it.) (If this card is attached to anything other than a Water Pokémon, discard this card.)";
}
