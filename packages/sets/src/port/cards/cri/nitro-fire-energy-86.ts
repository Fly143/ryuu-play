import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class NitroFireEnergy_86 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "CRI";
  public name: string = "Nitro Fire Energy";
  public fullName: string = "Nitro Fire Energy CRI 86";
  public text: string = "As long as this card is attached to a Pokémon, it provides Fire Energy. If this card is discarded by an effect of an attack used by the Fire Pokémon this card is attached to, put this card into your hand after attack damage and effects.";
}
