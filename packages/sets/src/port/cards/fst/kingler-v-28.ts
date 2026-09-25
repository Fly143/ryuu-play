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

export class KinglerV_28 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Falling Bubbles", cost: [], damage: "", text: "Flip a coin. If heads, search your deck for up to 5 Water Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck." },
      { name: "Raging Pincer", cost: [], damage: "200", text: "This Pokémon also does 30 damage to itself." }
  ];
  public set: string = "FST";
  public name: string = "Kingler V";
  public fullName: string = "Kingler V FST 28";
  public text: string = "Kingler V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, -30, 1);
    }
    return state;
  }
}
