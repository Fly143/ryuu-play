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

export class HisuianGrowlithe_70 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Defensive Posture", cost: [], damage: "", text: "Flip a coin. If heads, during your opponent's next turn, prevent all damage done to this Pokémon by attacks." },
      { name: "Bite", cost: [], damage: "30", text: "" }
  ];
  public set: string = "BRS";
  public name: string = "Hisuian Growlithe";
  public fullName: string = "Hisuian Growlithe BRS 70";
  public text: string = "Hisuian Growlithe";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
