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

export class AlakazamEX_117 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Kinesis", powerType: PowerType.ABILITY, text: "When you play M Alakazam-EX from your hand to evolve this Pokémon, before it evolves, you may put 2 damage counters on your opponent's Active Pokémon and 3 damage counters on 1 of your opponent's Benched Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Suppression", cost: [], damage: "", text: "Put 3 damage counters on each of your opponent's Pokémon that has any Energy attached to it." }
  ];
  public set: string = "FAC";
  public name: string = "Alakazam-EX";
  public fullName: string = "Alakazam-EX FAC 117";
  public text: string = "Alakazam-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersEachOpponent(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
