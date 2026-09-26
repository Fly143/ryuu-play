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

export class Sigilyph_662 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tri Recharge", cost: [], damage: "", text: "Flip 3 coins. Attach a number of basic Energy cards up to the number of heads from your discard pile to your Benched Pokémon in any way you like." },
      { name: "Psychic", cost: [], damage: "10+", text: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon." }
  ];
  public set: string = "FST";
  public name: string = "Sigilyph";
  public fullName: string = "Sigilyph FST 66";
  public text: string = "Sigilyph";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 0);
    }
    return state;
  }
}
