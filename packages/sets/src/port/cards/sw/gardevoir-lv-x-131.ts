import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GardevoirLVX_131 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gardevoir";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Teleportation", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), choose 1 of your Active Pokémon or 1 or your Benched Pokémon and switch Gardevoir with that Pokémon. This power can't be used if Gardevoir is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Bring Down", cost: [], damage: "", text: "Choose 1 Pokémon (yours or your opponent's) with the fewest remaining HP (excluding Gardevoir) and that Pokémon is now Knocked Out." }
  ];
  public set: string = "SW";
  public name: string = "Gardevoir LV.X";
  public fullName: string = "Gardevoir LV.X SW 131";
  public text: string = "Gardevoir LV.X";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.energyTrans(this, store, state, effect).use(effect as any);
    }
    return state;
  }
}
