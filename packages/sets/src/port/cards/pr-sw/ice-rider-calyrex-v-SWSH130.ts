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

export class IceRiderCalyrexVSWSH130 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
    public height?: number = 2.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Blizzard", cost: [], damage: "40", text: "This attack also does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Frost Stamp", cost: [], damage: "140", text: "" }
  ];
  public set: string = "PR-SW";
  public name: string = "Ice Rider Calyrex V";
  public fullName: string = "Ice Rider Calyrex V PR-SW SWSH130";
  public text: string = "Ice Rider Calyrex V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageAllBench(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
