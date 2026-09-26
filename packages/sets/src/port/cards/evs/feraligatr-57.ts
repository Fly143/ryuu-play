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

export class Feraligatr_57 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Croconaw";
  public hp: number = 170;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Rowdy", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you must flip a coin. If heads, discard the top 5 cards of your opponent's deck. If tails, discard the top 5 cards of your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Crunch", cost: [], damage: "140", text: "Discard an Energy from your opponent's Active Pokémon." }
  ];
  public set: string = "EVS";
  public name: string = "Feraligatr";
  public fullName: string = "Feraligatr EVS 57";
  public text: string = "Feraligatr";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergyDefending(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
