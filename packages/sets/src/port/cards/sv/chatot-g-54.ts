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

export class ChatotG_54 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Disrupting Spy", powerType: PowerType.ABILITY, text: "Once during your turn, when you put Chatot G from your hand onto your Bench, you may look at the top 4 cards of your opponent's deck. Put them back on top of your opponent's deck in any order.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Search and Escape", cost: [], damage: "", text: "Search your deck for a Trainer card, show it to your opponent, and put it into your hand. Put Chatot G and all cards attached to it on top of your deck. Shuffle your deck afterward." }
  ];
  public set: string = "SV";
  public name: string = "Chatot G";
  public fullName: string = "Chatot G SV 54";
  public text: string = "Chatot G";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchTrainerToHand:1");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "pokedex");
    }
    return state;
  }
}
