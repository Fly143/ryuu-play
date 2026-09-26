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

export class SimisearV_27 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bursting Power", cost: [], damage: "20", text: "You may attach up to 2 basic Energy cards from your hand to your Pokémon in any way you like." },
      { name: "Flare Juggling", cost: [], damage: "90+", text: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon." }
  ];
  public set: string = "FST";
  public name: string = "Simisear V";
  public fullName: string = "Simisear V FST 27";
  public text: string = "Simisear V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 0);
    }
    return state;
  }
}
