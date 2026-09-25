import {
  Effect,
  State,
  StoreLike,
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

export class Pichu_45 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Baby Evolution", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may put Pikachu from your hand onto Pichu (this counts as evolving Pichu) and remove all damage counters from Pichu.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Electric Circuit", cost: [], damage: "", text: "Search your discard pile for up to 4 Lightning Energy cards, show them to your opponent, and put them into your hand." }
  ];
  public set: string = "PL";
  public name: string = "Pichu";
  public fullName: string = "Pichu PL 45";
  public text: string = "Pichu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchBasicToBench:1");
    }
    return state;
  }
}
