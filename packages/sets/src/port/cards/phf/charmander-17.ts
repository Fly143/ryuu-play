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

export class Charmander_17 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Draw In", cost: [], damage: "", text: "Attach 2 Fire Energy cards from your discard pile to this Pokémon." },
      { name: "Flare", cost: [], damage: "20", text: "" }
  ];
  public set: string = "PHF";
  public name: string = "Charmander";
  public fullName: string = "Charmander PHF 17";
  public text: string = "Charmander";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.attachBasicFromDiscard(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.attachBasicFromDiscard(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
