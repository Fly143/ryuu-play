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

export class Metagross_115 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Metang";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Delta Control", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may look at the top 4 cards of your deck, choose 1 of them, and put it into your hand. Put the 3 other cards on the bottom of your deck in any order. This power can't be used if Metagross is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Crush and Burn", cost: [], damage: "30+", text: "You may discard as many Energy cards as you like attached to your Pokémon in play. If you do, this attack does 30 damage plus 20 more damage for each Energy card you discarded." }
  ];
  public set: string = "30C";
  public name: string = "Metagross";
  public fullName: string = "Metagross 30C 11";
  public text: string = "Metagross";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* pokedex */ state;
    }
    return state;
  }
}
