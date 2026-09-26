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

export class MDiancieEXXY44 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Diancie-EX";
  public hp: number = 190;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Diamond Force", cost: [], damage: "100", text: "During your opponent's next turn, prevent all damage done to each of your Pokémon from your opponent's Pokémon-EX. (If this Pokémon is no longer your Active Pokémon, this effect ends.)" }
  ];
  public set: string = "PR-XY";
  public name: string = "M Diancie-EX";
  public fullName: string = "M Diancie-EX PR-XY XY44";
  public text: string = "M Diancie-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "preventEffectsMarker");
    }
    return state;
  }
}
