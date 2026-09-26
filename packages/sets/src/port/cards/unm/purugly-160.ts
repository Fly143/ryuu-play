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

export class Purugly_160 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Glameow";
  public hp: number = 120;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Stray Cat Dash", cost: [], damage: "30", text: "Discard a random card from your opponent's hand. If this Pokémon evolved from Glameow during this turn, discard 2 cards instead of 1." },
      { name: "Lunge Out", cost: [], damage: "80", text: "" }
  ];
  public set: string = "UNM";
  public name: string = "Purugly";
  public fullName: string = "Purugly UNM 160";
  public text: string = "Purugly";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardOpponentHand(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
