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

export class MewEx_100 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Psychic Vision", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Mew ex is on your Bench, you may look at your opponent's hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Super Psy Bolt", cost: [], damage: "30", text: "" },
      { name: "Devo Crush", cost: [], damage: "50", text: "You may discard 2 Energy attached to Mew ex. If you do, you may remove the highest Stage Evolution card from the Defending Pokémon and shuffle that card into your opponent's deck." }
  ];
  public set: string = "HP";
  public name: string = "Mew ex";
  public fullName: string = "Mew ex HP 100";
  public text: string = "Mew ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
