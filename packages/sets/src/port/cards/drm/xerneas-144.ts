import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class Xerneas_144 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Path of Life", powerType: PowerType.ABILITY, text: "Once during your turn, when this Pokémon moves from your Bench to become your Active Pokémon, you may move any number of Energy from your other Pokémon to it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Bright Horns", cost: [], damage: "160", text: "This Pokémon can't use Bright Horns during your next turn." }
  ];
  public set: string = "DRM";
  public name: string = "Xerneas ◇";
  public fullName: string = "Xerneas ◇ DRM 144";
  public text: string = "Xerneas ◇";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
