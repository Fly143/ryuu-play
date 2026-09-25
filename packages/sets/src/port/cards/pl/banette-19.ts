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

export class Banette_19 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shuppet";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Temper Tantrum", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may discard as many cards as you like from your hand. If you do, put that many damage counters on Banette. This power can't be used if Banette is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Darkness Switch", cost: [], damage: "", text: "Discard an Energy card attached to Banette, and then switch all damage counters on Banette with those on the Defending Pokémon. (If an effect of this attack is prevented, this attack does nothing.)" },
      { name: "Loneliness", cost: [], damage: "30+", text: "You may show your hand to your opponent. If you do and if you don't have any Pokémon in your hand, this attack does 30 damage plus 30 more damage." }
  ];
  public set: string = "PL";
  public name: string = "Banette";
  public fullName: string = "Banette PL 19";
  public text: string = "Banette";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
