import { CardType, EnergyCard, EnergyType } from '@ptcg/common';

export class RainbowEnergy_104 extends EnergyCard {
  public energyType: EnergyType = EnergyType.SPECIAL;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set: string = "HS";
  public name: string = "Rainbow Energy";
  public fullName: string = "Rainbow Energy HS 104";
  public text: string = "Attach Rainbow Energy to 1 of your Pokémon. While in play, Rainbow Energy provides every type of Energy but provides only 1 Energy at a time. (Has no effect other than providing Energy.) When you attach this card from your hand to 1 of your Pokémon, put 1 damage counter on that Pokémon. (While not in play, Rainbow Energy counts as Colorless Energy.)";
}
