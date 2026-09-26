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

export class WhimsicottVSTAR_175 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Whimsicott V";
  public hp: number = 250;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Trick Wind", cost: [], damage: "160", text: "During your opponent's next turn, they can't play any Pokémon Tool or Special Energy cards from their hand." },
      { name: "Fluffball Star", cost: [], damage: "", text: "This attack does 60 damage to 1 of your opponent's Pokémon for each Energy attached to this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 VSTAR Power in a game.)" }
  ];
  public set: string = "FST";
  public name: string = "Whimsicott VSTAR";
  public fullName: string = "Whimsicott VSTAR FST 175";
  public text: string = "Whimsicott VSTAR";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 60);
    }
    return state;
  }
}
