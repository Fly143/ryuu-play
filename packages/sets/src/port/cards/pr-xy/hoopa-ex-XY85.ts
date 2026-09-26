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

export class HoopaEXXY85 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 140;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hyperspace Ring", cost: [], damage: "", text: "Search your deck for up to 2 Item cards, reveal them, and put them into your hand. Shuffle your deck afterward." },
      { name: "Wonder Trick", cost: [], damage: "100", text: "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon." }
  ];
  public set: string = "PR-XY";
  public name: string = "Hoopa-EX";
  public fullName: string = "Hoopa-EX PR-XY XY85";
  public text: string = "Hoopa-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchAnyToHand:2");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    return state;
  }
}
