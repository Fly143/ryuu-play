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

export class Kingdra_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Seadra";
  public hp: number = 150;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Whirltide", cost: [], damage: "", text: "Reveal the top 6 cards of your deck. This attack does 60 damage to 1 of your opponent's Pokémon for each Energy card you find there. Then, discard those Energy cards and shuffle the other cards back into your deck. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Hydro Splash", cost: [], damage: "120", text: "" }
  ];
  public set: string = "PAR";
  public name: string = "Kingdra";
  public fullName: string = "Kingdra PAR 32";
  public text: string = "Kingdra";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 60);
    }
    return state;
  }
}
