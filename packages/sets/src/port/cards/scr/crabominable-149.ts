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

export class Crabominable_149 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Crabrawler";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Food Prep", powerType: PowerType.ABILITY, text: "Attacks used by this Pokémon cost Colorless less for each Kofu card in your discard pile.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Haymaker", cost: [], damage: "250", text: "During your next turn, this Pokémon can't use Haymaker." }
  ];
  public set: string = "SCR";
  public name: string = "Crabominable";
  public fullName: string = "Crabominable SCR 149";
  public text: string = "Crabominable";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
