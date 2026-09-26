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

export class MegaSableyeTyranitarGX_226 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 280;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Greedy Crush", cost: [], damage: "210", text: "If your opponent's Pokémon-GX or Pokémon-EX is Knocked Out by damage from this attack, take 1 more Prize card." },
      { name: "Gigafall-GX", cost: [], damage: "250", text: "If this Pokémon has at least 5 extra Energy attached to it (in addition to this attack's cost), discard the top 15 cards of your opponent's deck. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "CEC";
  public name: string = "Mega Sableye & Tyranitar-GX";
  public fullName: string = "Mega Sableye & Tyranitar-GX CEC 226";
  public text: string = "Mega Sableye & Tyranitar-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "plusPrize:1");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 15);
    }
    return state;
  }
}
