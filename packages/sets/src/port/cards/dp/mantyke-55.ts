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

export class Mantyke_55 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Baby Evolution", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may put Mantine from your hand onto Mantyke (this counts as evolving Mantyke) and remove all damage counters from Mantyke.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Call for Friends", cost: [], damage: "", text: "Search your deck for a Water Basic Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward." }
  ];
  public set: string = "DP";
  public name: string = "Mantyke";
  public fullName: string = "Mantyke DP 55";
  public text: string = "Mantyke";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchPokemonToHand:1");
    }
    return state;
  }
}
