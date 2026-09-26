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

export class Suicune_19 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Aqua Recover", powerType: PowerType.ABILITY, text: "Once during your turn, when you put Suicune from your hand onto your Bench, you may search your discard pile for up to 3 Water Pokémon, show them to your opponent, and put them into your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Cure Stream", cost: [], damage: "60", text: "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 20 (before applying Weakness and Resistance)." }
  ];
  public set: string = "SW";
  public name: string = "Suicune";
  public fullName: string = "Suicune SW 19";
  public text: string = "Suicune";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfReduceDamageNextTurn(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
