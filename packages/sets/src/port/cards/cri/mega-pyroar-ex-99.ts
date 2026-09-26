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

export class MegaPyroarEx_99 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Litleo";
  public hp: number = 340;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ferocious Bellow", cost: [], damage: "80", text: "During your opponent's next turn, attacks used by the Defending Pokémon do 50 less damage (before applying Weakness and Resistance)." },
      { name: "Fiery Big Bang", cost: [], damage: "290-", text: "This attack does 10 less damage for each damage counter on this Pokémon." }
  ];
  public set: string = "CRI";
  public name: string = "Mega Pyroar ex";
  public fullName: string = "Mega Pyroar ex CRI 99";
  public text: string = "Mega Pyroar ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, Math.floor(effect.player.active.damage / 10));
    }
    return state;
  }
}
