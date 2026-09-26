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

export class ArvenSMabosstiffEx_235 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Arven's Maschiff";
  public hp: number = 270;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Vigorous Tackle", cost: [], damage: "30+", text: "If this Pokémon has no damage counters on it, this attack does 120 more damage." },
      { name: "Boss Headbutt", cost: [], damage: "210", text: "During your next turn, this Pokémon can't use Boss Headbutt." }
  ];
  public set: string = "DRI";
  public name: string = "Arven's Mabosstiff ex";
  public fullName: string = "Arven's Mabosstiff ex DRI 235";
  public text: string = "Arven's Mabosstiff ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 120, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
