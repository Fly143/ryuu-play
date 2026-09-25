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

export class Rampardos_65 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cranidos";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Clean Hit", cost: [], damage: "60+", text: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 60 more damage." },
      { name: "Wild Crash", cost: [], damage: "", text: "If your opponent's Active Pokémon is a Basic Pokémon, it is Knocked Out." }
  ];
  public set: string = "UPR";
  public name: string = "Rampardos";
  public fullName: string = "Rampardos UPR 65";
  public text: string = "Rampardos";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 60, 1);
    }
    return state;
  }
}
