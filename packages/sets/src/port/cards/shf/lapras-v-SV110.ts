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

export class LaprasVSV110 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Body Surf", cost: [], damage: "", text: "Attach a Water Energy card from your hand to this Pokémon. If you do, switch it with 1 of your Benched Pokémon." },
      { name: "Ocean Loop", cost: [], damage: "210", text: "Put 2 Water Energy attached to this Pokémon into your hand." }
  ];
  public set: string = "SHF";
  public name: string = "Lapras V";
  public fullName: string = "Lapras V SHF SV110";
  public text: string = "Lapras V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
