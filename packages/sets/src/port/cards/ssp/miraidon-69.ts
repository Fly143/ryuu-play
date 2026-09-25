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

export class Miraidon_69 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "C.O.D.E.: Protect", cost: [], damage: "40", text: "During your opponent's next turn, prevent all damage done to each of your Future Pokémon by attacks from Pokémon ex. If this Pokémon is no longer your Active Pokémon, this effect ends." },
      { name: "Thunder Claws", cost: [], damage: "100", text: "" }
  ];
  public set: string = "SSP";
  public name: string = "Miraidon";
  public fullName: string = "Miraidon SSP 69";
  public text: string = "Miraidon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "preventEffectsMarker");
    }
    return state;
  }
}
