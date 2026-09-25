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

export class Wynaut_71 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Baby Evolution", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may put Wobbuffet from your hand onto Wynaut (this counts as evolving Wynaut) and remove all damage counters from Wynaut.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Confusion Wave", cost: [], damage: "", text: "Both Wynaut and the Defending Pokémon are now Confused." }
  ];
  public set: string = "LM";
  public name: string = "Wynaut";
  public fullName: string = "Wynaut LM 71";
  public text: string = "Wynaut";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchBasicToBench:1");
    }
    return state;
  }
}
