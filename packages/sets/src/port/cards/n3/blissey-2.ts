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

export class Blissey_2 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Chansey";
  public hp: number = 120;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Softboiled", powerType: PowerType.ABILITY, text: "When you play Blissey from your hand, you may flip a coin. If heads, remove 8 damage counters from Blissey. If tails, remove 4 damage counters from Blissey. Either way, if Blissey has fewer damage counters than that, remove all of them.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Body Slam", cost: [], damage: "30", text: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed." }
  ];
  public set: string = "N3";
  public name: string = "Blissey";
  public fullName: string = "Blissey N3 2";
  public text: string = "Blissey";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    return state;
  }
}
