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

export class KrookodileEx_55 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Krokorok";
  public hp: number = 320;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Corner", cost: [], damage: "80", text: "During your opponent's next turn, the Defending Pokémon can't retreat." },
      { name: "Strong Bite", cost: [], damage: "140+", text: "If this Pokémon has a Pokémon Tool attached, this attack does 140 more damage." }
  ];
  public set: string = "CRI";
  public name: string = "Krookodile ex";
  public fullName: string = "Krookodile ex CRI 55";
  public text: string = "Krookodile ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 140, 1);
    }
    return state;
  }
}
