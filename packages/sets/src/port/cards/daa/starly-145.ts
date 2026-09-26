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

export class Starly_145 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sky Circus", powerType: PowerType.ABILITY, text: "If you played Bird Keeper from your hand during this turn, ignore all Energy in this Pokémon's attack costs.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Keen Eye", cost: [], damage: "", text: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck." }
  ];
  public set: string = "DAA";
  public name: string = "Starly";
  public fullName: string = "Starly DAA 145";
  public text: string = "Starly";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchAnyToHand:2");
    }
    return state;
  }
}
