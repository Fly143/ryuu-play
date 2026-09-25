import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class RainbowEnergy_80 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "TR";
  public name: string = "Rainbow Energy";
  public fullName: string = "Rainbow Energy TR 80";
  public text: string = "Attach Rainbow Energy to 1 of your Pokémon. While in play, Rainbow Energy counts as every type of basic Energy but only provides 1 Energy at a time. (Doesn't count as a basic Energy card when not in play.) When you attach this card from your hand to 1 of your Pokémon, it does 10 damage to that Pokémon. (Don't apply Weakness and Resistance.)";
}
