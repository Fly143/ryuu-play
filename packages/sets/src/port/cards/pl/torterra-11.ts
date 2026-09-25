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

export class Torterra_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Grotle";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sunshine Song", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), when you play Torterra from your hand to evolve 1 of your Pokémon, you may choose as many of your Grass Pokémon in play as you like. For each Grass Pokémon you choose, search your deck for an Evolution card that evolves from that Pokémon and evolve it. Shuffle your deck afterward.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Crash Impact", cost: [], damage: "60", text: "Torterra does 20 damage to itself. Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any." },
      { name: "Land Shake", cost: [], damage: "80", text: "During your opponent's next turn, when your opponent puts a Basic Pokémon from his or her hand onto his or her Bench, put 2 damage counters on that Pokémon." }
  ];
  public set: string = "PL";
  public name: string = "Torterra";
  public fullName: string = "Torterra PL 11";
  public text: string = "Torterra";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
