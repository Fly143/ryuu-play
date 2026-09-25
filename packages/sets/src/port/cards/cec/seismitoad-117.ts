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

export class Seismitoad_117 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Palpitoad";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Bulldoze", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may search your deck for a card, shuffle your deck, then put that card on top of it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Tremulous Fist", cost: [], damage: "80+", text: "This attack does 30 more damage for each of your Benched Pokémon that has any damage counters on it." }
  ];
  public set: string = "CEC";
  public name: string = "Seismitoad";
  public fullName: string = "Seismitoad CEC 117";
  public text: string = "Seismitoad";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "bonusPerDamagedBench:30");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchAnyToHand:1");
    }
    return state;
  }
}
