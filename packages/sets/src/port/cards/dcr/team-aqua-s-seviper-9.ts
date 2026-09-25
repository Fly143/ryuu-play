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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamAquaSSeviper_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Venomous Fang", cost: [], damage: "10", text: "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned." },
      { name: "Venom Tail", cost: [], damage: "30", text: "If your opponent's Active Pokémon is affected by a Special Condition, discard an Energy attached to that Pokémon." }
  ];
  public set: string = "DCR";
  public name: string = "Team Aqua's Seviper";
  public fullName: string = "Team Aqua's Seviper DCR 9";
  public text: string = "Team Aqua's Seviper";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
