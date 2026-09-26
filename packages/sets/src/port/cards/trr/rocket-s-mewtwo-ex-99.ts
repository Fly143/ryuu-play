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

export class RocketSMewtwoEx_99 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Darkness Switch", cost: [], damage: "", text: "Discard an Energy card attached to Rocket's Mewtwo ex, and then switch all damage counters on Rocket's Mewtwo ex with those on the Defending Pokémon. (If an effect of this attack is prevented, this attack does nothing.)" },
      { name: "Hypnoblast", cost: [], damage: "40", text: "Flip a coin. If heads, the Defending Pokémon is now Asleep." },
      { name: "Psyburn", cost: [], damage: "70", text: "" }
  ];
  public set: string = "TRR";
  public name: string = "Rocket's Mewtwo ex";
  public fullName: string = "Rocket's Mewtwo ex TRR 99";
  public text: string = "Rocket's Mewtwo ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
