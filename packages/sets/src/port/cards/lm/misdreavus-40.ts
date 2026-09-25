import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class Misdreavus_40 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Deep Sleep", powerType: PowerType.ABILITY, text: "As long as Misdreavus is your Active Pokémon, each player flips 2 coins for his or her Pokémon that is Asleep between turns. If either coin is tails, that Pokémon is still Asleep.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Return Trance", cost: [], damage: "", text: "Return an Energy card attached to Misdreavus to your hand. The Defending Pokémon is now Asleep." },
      { name: "Dream Eater", cost: [], damage: "30", text: "If the Defending Pokémon is not Asleep, this attack does nothing." }
  ];
  public set: string = "LM";
  public name: string = "Misdreavus";
  public fullName: string = "Misdreavus LM 40";
  public text: string = "Misdreavus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
