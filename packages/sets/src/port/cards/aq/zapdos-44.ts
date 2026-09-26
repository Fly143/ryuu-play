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

export class Zapdos_44 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Anti-Lightning", powerType: PowerType.ABILITY, text: "You can't attach Lightning Energy cards from your hand to Zapdos.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Plasma", cost: [], damage: "10", text: "If there are any Lightning Energy cards in your discard pile, flip a coin. If heads, attach 1 of them to Zapdos." },
      { name: "Lightning Storm", cost: [], damage: "60", text: "Flip a coin. If tails, put 2 damage counters on Zapdos." }
  ];
  public set: string = "AQ";
  public name: string = "Zapdos";
  public fullName: string = "Zapdos AQ 44";
  public text: string = "Zapdos";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
