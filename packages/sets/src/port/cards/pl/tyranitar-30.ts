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

export class Tyranitar_30 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pupitar";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Darkness Drive", powerType: PowerType.ABILITY, text: "After your opponent's Pokémon uses a Poké-Power, you may search your discard pile for a basic Darkness Energy card and attach it to Tyranitar.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Grind", cost: [], damage: "20×", text: "Does 20 damage times the amount of Energy attached to Tyranitar." },
      { name: "Spinning Tail", cost: [], damage: "", text: "This attack does 30 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "PL";
  public name: string = "Tyranitar";
  public fullName: string = "Tyranitar PL 30";
  public text: string = "Tyranitar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageTimesEnergySelf(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageAllOpponent(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
