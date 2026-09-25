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

export class Victreebel_17 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Weepinbell";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Acid Sampler", powerType: PowerType.ABILITY, text: "As long as Victreebel is your Active Pokémon, put 1 damage counter on each Defending Pokémon between turns. Acid Sampler stops working if your other Active Pokémon is not a Victreebel.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Acid", cost: [], damage: "50", text: "The Defending Pokémon can't retreat until the end of your opponent's next turn." }
  ];
  public set: string = "RG";
  public name: string = "Victreebel";
  public fullName: string = "Victreebel RG 17";
  public text: string = "Victreebel";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
