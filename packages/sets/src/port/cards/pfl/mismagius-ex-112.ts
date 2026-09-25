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

export class MismagiusEx_112 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Misdreavus";
  public hp: number = 260;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Swirling Prose", powerType: PowerType.ABILITY, text: "As long as this Pokémon is in the Active Spot, whenever your opponent's Active Pokémon moves to the Bench during their turn, their new Active Pokémon is now Confused.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hexa-Magic", cost: [], damage: "150", text: "You may draw cards until you have 6 cards in your hand." }
  ];
  public set: string = "PFL";
  public name: string = "Mismagius ex";
  public fullName: string = "Mismagius ex PFL 112";
  public text: string = "Mismagius ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "drawUntilHand:6");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
