import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class WashWaterEnergy_165 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "VIV";
  public name: string = "Wash Water Energy";
  public fullName: string = "Wash Water Energy VIV 165";
  public text: string = "As long as this card is attached to a Pokémon, it provides Water Energy. Prevent all effects of attacks from your opponent's Pokémon done to the Water Pokémon this card is attached to. (Existing effects are not removed. Damage is not an effect.)";
}
