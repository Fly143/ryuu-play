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

export class LightToxtricitySWSH137 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Toxel";
  public hp: number = 120;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Slow Ballad", cost: [], damage: "", text: "Heal 30 damage from both Active Pokémon." },
      { name: "Beatdown Smash", cost: [], damage: "160", text: "During your next turn, this Pokémon can't use Beatdown Smash." }
  ];
  public set: string = "PR-SW";
  public name: string = "Light Toxtricity";
  public fullName: string = "Light Toxtricity PR-SW SWSH137";
  public text: string = "Light Toxtricity";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
