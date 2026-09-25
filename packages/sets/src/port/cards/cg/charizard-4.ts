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

export class Charizard_44 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Charmeleon";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Peal of Thunder", powerType: PowerType.ABILITY, text: "Once during your turn, when you play Charizard from your hand to evolve 1 of your Pokémon, you may look at the top 5 cards of your deck, choose as many Energy cards as you like, and attach them to 1 of your Pokémon. Discard the other cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Metal Burn", cost: [], damage: "120", text: "Discard all Metal Energy attached to Charizard." }
  ];
  public set: string = "CG";
  public name: string = "Charizard δ";
  public fullName: string = "Charizard δ CG 4";
  public text: string = "Charizard δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 99);
    }
    return state;
  }
}
