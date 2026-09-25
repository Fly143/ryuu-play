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

export class Nidoqueen_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nidorina";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Evolution Helper", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Nidoqueen is on your Bench, you may search your deck for a card that evolves from your Active Pokémon and attach it to your Active Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Double Claw", cost: [], damage: "30+", text: "Flip 2 coins. This attack does 30 damage plus 20 more damage for each heads" }
  ];
  public set: string = "SK";
  public name: string = "Nidoqueen";
  public fullName: string = "Nidoqueen SK 22";
  public text: string = "Nidoqueen";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
