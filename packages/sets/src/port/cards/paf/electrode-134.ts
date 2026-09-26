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

export class Electrode_134 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Voltorb";
  public hp: number = 90;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bang Boom Chain", cost: [], damage: "20+", text: "Before doing damage, you may discard any number of Pokémon Tools from your Pokémon. This attack does 40 more damage for each card you discarded in this way." },
      { name: "Electro Ball", cost: [], damage: "70", text: "" }
  ];
  public set: string = "PAF";
  public name: string = "Electrode";
  public fullName: string = "Electrode PAF 134";
  public text: string = "Electrode";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 40, 0);
    }
    return state;
  }
}
