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

export class Banette_65 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shuppet";
  public hp: number = 90;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Red Eyes", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put a Basic Pokémon from your opponent's discard pile onto their Bench.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Enemy Show", cost: [], damage: "", text: "For each of your opponent's Pokémon in play, put 1 damage counter on your opponent's Pokémon in any way you like." }
  ];
  public set: string = "CES";
  public name: string = "Banette";
  public fullName: string = "Banette CES 65";
  public text: string = "Banette";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersEachOpponent(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
