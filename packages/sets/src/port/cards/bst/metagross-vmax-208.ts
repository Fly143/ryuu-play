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

export class MetagrossVMAX_208 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Metagross V";
  public hp: number = 330;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Zap Traction", cost: [], damage: "", text: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck." },
      { name: "Max Rush", cost: [], damage: "100", text: "During your next turn, this Pokémon's Max Rush attack does 150 more damage." }
  ];
  public set: string = "BST";
  public name: string = "Metagross VMAX";
  public fullName: string = "Metagross VMAX BST 208";
  public text: string = "Metagross VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchAnyToHand:2");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 0, 0);
    }
    return state;
  }
}
