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

export class KommoO_163 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Hakamo-o";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Shout of Power", cost: [], damage: "60", text: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon." },
      { name: "Scaly Uppercut", cost: [], damage: "90+", text: "You may discard a Pokémon Tool card from this Pokémon. If you do, this attack does 90 more damage." }
  ];
  public set: string = "CEC";
  public name: string = "Kommo-o";
  public fullName: string = "Kommo-o CEC 163";
  public text: string = "Kommo-o";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 90, 1);
    }
    return state;
  }
}
