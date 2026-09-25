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

export class ChanseyEx_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Healing Egg", cost: [], damage: "", text: "Remove 2 damage counters (1 if there is only 1) from each of your Pokémon. Remove no damage counters from Chansey ex." },
      { name: "Double-edge", cost: [], damage: "80", text: "Chansey ex does 60 damage to itself." }
  ];
  public set: string = "RS";
  public name: string = "Chansey ex";
  public fullName: string = "Chansey ex RS 96";
  public text: string = "Chansey ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, -60, 1);
    }
    return state;
  }
}
