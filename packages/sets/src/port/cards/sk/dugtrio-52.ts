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

export class Dugtrio_52 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Diglett";
  public hp: number = 70;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Burrow", cost: [], damage: "20", text: "Flip a coin. If heads, prevent all damage done by attacks to Dugtrio during your opponent's next turn. (Any other effects of attacks still happen.)" },
      { name: "Dig Under", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. Don't apply Weakness or Resistance. (Any other effects that would happen after applying Weakness and Resistance still happen.)" }
  ];
  public set: string = "SK";
  public name: string = "Dugtrio";
  public fullName: string = "Dugtrio SK 52";
  public text: string = "Dugtrio";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
