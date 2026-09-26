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

export class Golem_148 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Graveler";
  public hp: number = 100;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Crystal Type", powerType: PowerType.ABILITY, text: "Whenever you attach a Grass, Fire, or Fighting basic Energy card from your hand to Golem, Golem's type (color) becomes the same as that type of Energy until the end of the turn.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Rock Throw", cost: [], damage: "30", text: "" },
      { name: "Earth Bomb", cost: [], damage: "50", text: "Golem does 20 damage to itself. This attack also does 10 damage to each Benched Pokémon (yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "SK";
  public name: string = "Golem";
  public fullName: string = "Golem SK 148";
  public text: string = "Golem";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageAllBench(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
