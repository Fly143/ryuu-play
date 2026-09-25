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

export class GalarianObstagoon_37 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Galarian Linoone";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Wicked Ruler", powerType: PowerType.ABILITY, text: "Once during your turn, you may have your opponent discard cards from their hand until they have 4 cards in their hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Knuckle Impact", cost: [], damage: "180", text: "During your next turn, this Pokémon can't attack." }
  ];
  public set: string = "CPA";
  public name: string = "Galarian Obstagoon";
  public fullName: string = "Galarian Obstagoon CPA 37";
  public text: string = "Galarian Obstagoon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
