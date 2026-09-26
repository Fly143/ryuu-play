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

export class TogeticH27 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Togepi";
  public hp: number = 60;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Miracle Shift", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), discard a basic Energy card attached to 1 of your Pokémon. Then, choose a basic Energy card from your discard pile and attach it to that Pokémon. This power can't be used if Togetic is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mini-Metronome", cost: [], damage: "", text: "Flip a coin. If heads, choose 1 of the Defending Pokémon's attacks. Mini-Metronome copies that attack except for its Energy cost. (You must still do anything else required in order to use that attack.) (No matter what type the Defending Pokémon is, Togetic is still Colorless.) Togetic performs that attack." }
  ];
  public set: string = "AQ";
  public name: string = "Togetic";
  public fullName: string = "Togetic AQ H27";
  public text: string = "Togetic";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "copyAttack");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
