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

export class TingLu_109 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 140;
    public height?: number = 1.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sand Bringer", cost: [], damage: "", text: "Attach up to 2 Basic Fighting Energy cards from your discard pile to 1 of your Pokémon." },
      { name: "Arrogant Impact", cost: [], damage: "220", text: "If this Pokémon has 4 or more damage counters on it, this attack does nothing." }
  ];
  public set: string = "PAR";
  public name: string = "Ting-Lu";
  public fullName: string = "Ting-Lu PAR 109";
  public text: string = "Ting-Lu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    return state;
  }
}
