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

export class RegigigasSWSH247 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 150;
    public height?: number = 4.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Limber Up", cost: [], damage: "20", text: "Attach a basic Energy card from your discard pile to this Pokémon." },
      { name: "Double Impact", cost: [], damage: "120×", text: "Flip 2 coins. This attack does 120 damage for each heads." }
  ];
  public set: string = "PR-SW";
  public name: string = "Regigigas";
  public fullName: string = "Regigigas PR-SW SWSH247";
  public text: string = "Regigigas";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.attachBasicFromDiscard(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 120);
    }
    return state;
  }
}
