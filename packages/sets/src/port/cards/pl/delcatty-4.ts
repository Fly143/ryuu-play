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

export class Delcatty_42 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Skitty";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Power Circulation", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may search your discard pile for up to 2 basic Energy cards, show them to your opponent, and put those cards on top of your deck in any order. If you do, put 2 damage counters on Delcatty. This power can't be used if Delcatty is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Power Heal", cost: [], damage: "10+", text: "Does 10 damage plus 10 more damage for each damage counter on Delcatty. Then, remove 2 damage counters from Delcatty." },
      { name: "Rear Kick", cost: [], damage: "60", text: "" }
  ];
  public set: string = "PL";
  public name: string = "Delcatty";
  public fullName: string = "Delcatty PL 4";
  public text: string = "Delcatty";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
