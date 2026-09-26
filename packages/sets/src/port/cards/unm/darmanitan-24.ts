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

export class Darmanitan_24 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Darumaka";
  public hp: number = 130;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Find Wildfire", cost: [], damage: "", text: "Search your deck for up to 3 Fire Energy cards, reveal them, and put them into your hand. Then, shuffle your deck." },
      { name: "Flare Blitz", cost: [], damage: "110", text: "Discard all Fire Energy from this Pokémon." }
  ];
  public set: string = "UNM";
  public name: string = "Darmanitan";
  public fullName: string = "Darmanitan UNM 24";
  public text: string = "Darmanitan";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchAnyToHand:3");
    }
    return state;
  }
}
