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

export class GreninjaSWSH144 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Shadow Knife", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand onto your Bench during your turn, you may put 1 damage counter on 1 of your opponent's Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mist Slash", cost: [], damage: "100", text: "This attack's damage isn't affected by Weakness or Resistance, or by any effects on your opponent's Active Pokémon." }
  ];
  public set: string = "PR-SW";
  public name: string = "Greninja ★";
  public fullName: string = "Greninja ★ PR-SW SWSH144";
  public text: string = "Greninja ★";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    return state;
  }
}
