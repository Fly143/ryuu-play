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

export class BlisseyV_119 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 250;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Natural Cure", powerType: PowerType.ABILITY, text: "Whenever you attach an Energy card from your hand to this Pokémon, remove all Special Conditions from it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Blissful Blast", cost: [], damage: "10+", text: "This attack does 30 more damage for each Energy attached to this Pokémon. If you did any damage with this attack, you may attach up to 3 Energy cards from your discard pile to this Pokémon." }
  ];
  public set: string = "BST";
  public name: string = "Blissey V";
  public fullName: string = "Blissey V BST 119";
  public text: string = "Blissey V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
