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

export class ArceusXY116 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Type Switch", cost: [], damage: "", text: "Choose Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal, Fairy, or Dragon type. Until the ends of your next turn, this Pokémon is that type." },
      { name: "Power Blast", cost: [], damage: "120", text: "Discard an Energy attached to this Pokémon." }
  ];
  public set: string = "PR-XY";
  public name: string = "Arceus";
  public fullName: string = "Arceus PR-XY XY116";
  public text: string = "Arceus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
