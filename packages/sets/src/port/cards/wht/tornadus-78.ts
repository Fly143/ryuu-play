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

export class Tornadus_78 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Wrapped in Wind", cost: [], damage: "", text: "Attach a Basic Energy card from your hand to this Pokémon." },
      { name: "Hurricane", cost: [], damage: "100", text: "Move a Basic Energy from this Pokémon to 1 of your Benched Pokémon." }
  ];
  public set: string = "WHT";
  public name: string = "Tornadus";
  public fullName: string = "Tornadus WHT 78";
  public text: string = "Tornadus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.energyTrans(this, store, state, effect).use(effect);
    }
    return state;
  }
}
