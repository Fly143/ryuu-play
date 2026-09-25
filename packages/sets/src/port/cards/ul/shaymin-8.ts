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

export class Shaymin_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Celebration Wind", powerType: PowerType.ABILITY, text: "Once during your turn, when you put Shaymin from your hand onto your Bench, you may move as many Energy cards attached to your Pokémon as you like to any of your other Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Energy Bloom", cost: [], damage: "30", text: "Remove 3 damage counters from each of your Pokémon that has any Energy attached to it." }
  ];
  public set: string = "UL";
  public name: string = "Shaymin";
  public fullName: string = "Shaymin UL 8";
  public text: string = "Shaymin";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
