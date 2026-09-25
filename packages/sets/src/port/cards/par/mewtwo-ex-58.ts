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

export class MewtwoEx_58 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 230;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Transfer Charge", cost: [], damage: "", text: "Attach up to 2 Basic Psychic Energy cards from your discard pile to your Pokémon in any way you like." },
      { name: "Photon Kinesis", cost: [], damage: "10+", text: "This attack does 30 more damage for each Psychic Energy attached to all of your Pokémon." }
  ];
  public set: string = "PAR";
  public name: string = "Mewtwo ex";
  public fullName: string = "Mewtwo ex PAR 58";
  public text: string = "Mewtwo ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 0);
    }
    return state;
  }
}
