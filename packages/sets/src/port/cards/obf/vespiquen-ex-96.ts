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

export class VespiquenEx_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Combee";
  public hp: number = 270;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Healing Pheromone", cost: [], damage: "", text: "Heal 60 damage from 1 of your Pokémon." },
      { name: "Phantom Queen", cost: [], damage: "200", text: "Put 3 damage counters on each of your opponent's Benched Pokémon that has any damage counters on it." }
  ];
  public set: string = "OBF";
  public name: string = "Vespiquen ex";
  public fullName: string = "Vespiquen ex OBF 96";
  public text: string = "Vespiquen ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "heal:60");
    }
    return state;
  }
}
