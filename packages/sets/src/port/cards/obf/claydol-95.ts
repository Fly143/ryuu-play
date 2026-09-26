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

export class Claydol_95 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Baltoy";
  public hp: number = 120;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Kaboom Doll", cost: [], damage: "", text: "Put damage counters on your opponent's Active Pokémon until its remaining HP is 10. If you placed any damage counters in this way, this attack also does 120 damage to this Pokémon." },
      { name: "Mind Bend", cost: [], damage: "30", text: "Your opponent's Active Pokémon is now Confused." }
  ];
  public set: string = "OBF";
  public name: string = "Claydol";
  public fullName: string = "Claydol OBF 95";
  public text: string = "Claydol";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
