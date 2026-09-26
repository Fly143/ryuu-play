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

export class Zoroark_712 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Zorua";
  public hp: number = 100;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Brutal Bash", cost: [], damage: "20×", text: "Does 20 damage times the number of Darkness Pokémon you have in play." },
      { name: "Dark Rush", cost: [], damage: "20×", text: "Does 20 damage times the number of damage counters on this Pokémon." }
  ];
  public set: string = "DRX";
  public name: string = "Zoroark";
  public fullName: string = "Zoroark DRX 71";
  public text: string = "Zoroark";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageTimesPokemonInPlay(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageTimesSelfCounters(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
