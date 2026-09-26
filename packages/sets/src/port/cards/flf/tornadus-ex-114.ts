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

export class TornadusEX_114 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Windfall", cost: [], damage: "", text: "Shuffle your hand into your deck. Then, draw 6 cards." },
      { name: "Jet Blast", cost: [], damage: "60+", text: "This attack does 30 more damage for each Plasma Energy attached to this Pokémon." }
  ];
  public set: string = "FLF";
  public name: string = "Tornadus-EX";
  public fullName: string = "Tornadus-EX FLF 114";
  public text: string = "Tornadus-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
