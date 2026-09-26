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

export class Spectrier_81 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
    public height?: number = 2.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Night Footsteps", cost: [], damage: "", text: "Choose 2 of your opponent's Pokémon and put 2 damage counters on each of them." },
      { name: "Phantom Strike", cost: [], damage: "120", text: "During your next turn, this Pokémon can't use Phantom Strike." }
  ];
  public set: string = "ASR";
  public name: string = "Spectrier";
  public fullName: string = "Spectrier ASR 81";
  public text: string = "Spectrier";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
