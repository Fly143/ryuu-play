import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class ArticunoH3 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Water Immunity", powerType: PowerType.ABILITY, text: "You can't attach Water Energy cards from your hand to Articuno.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Freeze Solid", cost: [], damage: "10", text: "If there are any Water Energy cards in your discard pile, flip a coin. If heads, attach 1 of them to Articuno." },
      { name: "Ice Cyclone", cost: [], damage: "50", text: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. If tails, this attack does 10 damage to each of your Pokémon in play. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "SK";
  public name: string = "Articuno";
  public fullName: string = "Articuno SK H3";
  public text: string = "Articuno";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageAllBench(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
