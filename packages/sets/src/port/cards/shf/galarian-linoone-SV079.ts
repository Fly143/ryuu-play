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

export class GalarianLinooneSV079 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Galarian Zigzagoon";
  public hp: number = 100;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Night Slash", cost: [], damage: "20", text: "Switch this Pokémon with 1 of your Benched Pokémon." },
      { name: "Hammer In", cost: [], damage: "70", text: "" }
  ];
  public set: string = "SHF";
  public name: string = "Galarian Linoone";
  public fullName: string = "Galarian Linoone SHF SV079";
  public text: string = "Galarian Linoone";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
