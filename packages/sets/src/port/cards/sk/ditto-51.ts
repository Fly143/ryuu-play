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

export class Ditto_51 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Prismatic Body", powerType: PowerType.ABILITY, text: "Each basic Energy card attached to Ditto provides every type of Energy but provides only 1 Energy at a time.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Copy", cost: [], damage: "", text: "Choose 1 of the Defending Pokémon's attacks. Copy copies that attack. This attack does nothing if Ditto doesn't have the Energy necessary to use that attack. (You must still do anything else required in order to use that attack.)" }
  ];
  public set: string = "SK";
  public name: string = "Ditto";
  public fullName: string = "Ditto SK 51";
  public text: string = "Ditto";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "metronome");
    }
    return state;
  }
}
