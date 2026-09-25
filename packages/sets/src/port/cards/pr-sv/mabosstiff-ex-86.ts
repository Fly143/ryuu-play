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

export class MabosstiffEx_86 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Maschiff";
  public hp: number = 260;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Daunt", cost: [], damage: "30", text: "During your opponent's next turn, attacks used by the Defending Pokémon do 50 less damage (before applying Weakness and Resistance)." },
      { name: "Proud Fangs", cost: [], damage: "100+", text: "If your Benched Pokémon have any damage counters on them, this attack does 120 more damage." }
  ];
  public set: string = "PR-SV";
  public name: string = "Mabosstiff ex";
  public fullName: string = "Mabosstiff ex PR-SV 86";
  public text: string = "Mabosstiff ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 120, 1);
    }
    return state;
  }
}
