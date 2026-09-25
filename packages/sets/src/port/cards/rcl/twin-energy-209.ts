import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class TwinEnergy_209 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "RCL";
  public name: string = "Twin Energy";
  public fullName: string = "Twin Energy RCL 209";
  public text: string = "As long as this card is attached to a Pokémon that isn't a Pokémon V or a Pokémon-GX, it provides ColorlessColorless Energy. If this card is attached to a Pokémon V or a Pokémon-GX, it provides Colorless Energy instead.";
}
