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

export class Ariados_27 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Spinarak";
  public hp: number = 60;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Spider Web", cost: [], damage: "", text: "Flip a coin. If heads, the Defending Pokémon can't retreat. (Benching or evolving that Pokémon ends this effect.)" },
      { name: "Poison Bite", cost: [], damage: "20", text: "If this attack damages the Defending Pokémon, the Defending Pokémon is now Poisoned and you remove a number of damage counters from Ariados equal to half that damage (rounded up to the nearest 10). If Ariados has fewer damage counters than that, remove all of them." }
  ];
  public set: string = "N1";
  public name: string = "Ariados";
  public fullName: string = "Ariados N1 27";
  public text: string = "Ariados";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.poisonDefending(this, store, state, effect).use(effect);
    }
    return state;
  }
}
