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

export class PaldeanWooper_41 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Splattering Poison", cost: [], damage: "", text: "Both Active Pokémon are now Poisoned." },
      { name: "Tail Whap", cost: [], damage: "30", text: "" }
  ];
  public set: string = "PR-SV";
  public name: string = "Paldean Wooper";
  public fullName: string = "Paldean Wooper PR-SV 41";
  public text: string = "Paldean Wooper";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialBoth(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
