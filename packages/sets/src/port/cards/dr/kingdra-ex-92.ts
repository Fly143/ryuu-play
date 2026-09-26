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

export class KingdraEx_92 extends PokemonCard {
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
      { name: "Genetic Memory", cost: [], damage: "", text: "Use any attack from Kingdra ex's Basic Pokémon card or Stage 1 Evolution card. (Kingdra ex doesn't have to pay for that attack's Energy cost.)" },
      { name: "Hydrocannon", cost: [], damage: "50+", text: "Does 50 damage plus 20 more damage for each Water Energy attached to Kingdra ex but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way." }
  ];
  public set: string = "DR";
  public name: string = "Kingdra ex";
  public fullName: string = "Kingdra ex DR 92";
  public text: string = "Kingdra ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
