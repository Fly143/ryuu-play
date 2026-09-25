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

export class NihilegoGX_103 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Empty Light", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand onto your Bench during your turn, you may leave both Active Pokémon Confused and Poisoned.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Lock Up", cost: [], damage: "120", text: "The Defending Pokémon can't retreat during your opponent's next turn." },
      { name: "Symbiont-GX", cost: [], damage: "", text: "Add the top 2 cards of your opponent's deck to their Prize cards. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "CRI";
  public name: string = "Nihilego-GX";
  public fullName: string = "Nihilego-GX CRI 103";
  public text: string = "Nihilego-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
