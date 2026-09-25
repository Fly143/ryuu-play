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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Walrein_39 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sealeo";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Freeze-up", powerType: PowerType.ABILITY, text: "Once during your turn, when you play Walrein from your hand to evolve 1 of your Pokémon, you may flip 2 coins. If both are heads, discard 1 of the Defending Pokémon and all cards attached to it. (This doesn't count as a Knocked Out Pokémon.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Ice Bind", cost: [], damage: "70", text: "If your opponent doesn't discard a card from his or her hand, the Defending Pokémon is now Paralyzed." }
  ];
  public set: string = "MT";
  public name: string = "Walrein";
  public fullName: string = "Walrein MT 39";
  public text: string = "Walrein";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    return state;
  }
}
