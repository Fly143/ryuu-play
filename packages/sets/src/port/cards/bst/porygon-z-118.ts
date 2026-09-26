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

export class PorygonZ_118 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Porygon2";
  public hp: number = 140;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Bug Transmission", powerType: PowerType.ABILITY, text: "Whenever you attach an Energy card from your hand to this Pokémon during your turn, you may make your opponent's Active Pokémon Confused.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Superbeam", cost: [], damage: "170", text: "Discard 2 Energy from this Pokémon." }
  ];
  public set: string = "BST";
  public name: string = "Porygon-Z";
  public fullName: string = "Porygon-Z BST 118";
  public text: string = "Porygon-Z";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
