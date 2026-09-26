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

export class MewtwoEX_103 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Energy Absorption", cost: [], damage: "", text: "Attach an Energy card from your discard pile to this Pokémon." },
      { name: "Regeneration", cost: [], damage: "", text: "Heal 60 damage from this Pokémon." },
      { name: "Psyburn", cost: [], damage: "110", text: "" }
  ];
  public set: string = "EVO";
  public name: string = "Mewtwo-EX";
  public fullName: string = "Mewtwo-EX EVO 103";
  public text: string = "Mewtwo-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.attachBasicFromDiscard(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 60);
    }
    return state;
  }
}
