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

export class LycanrocGX_82 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rockruff";
  public hp: number = 200;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Twilight Eyes", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may discard an Energy attached to your opponent's Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Accelerock", cost: [], damage: "120", text: "" },
      { name: "Splintered Shards-GX", cost: [], damage: "30×", text: "This attack does 30 damage for each Energy card in your opponent's discard pile. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "UNB";
  public name: string = "Lycanroc-GX";
  public fullName: string = "Lycanroc-GX UNB 82";
  public text: string = "Lycanroc-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
