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

export class Delcatty_3 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Skitty";
  public hp: number = 80;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Scratch", cost: [], damage: "30", text: "" },
      { name: "Ultra Energy Source", cost: [], damage: "10×", text: "Does 10 damage times the number of basic Energy cards attached to all of the Active Pokémon (both yours and your opponent's)." }
  ];
  public set: string = "TK1A";
  public name: string = "Delcatty";
  public fullName: string = "Delcatty TK1A 3";
  public text: string = "Delcatty";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageTimesEnergySelf(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
