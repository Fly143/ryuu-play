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

export class MewEx_53 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Restart", powerType: PowerType.ABILITY, text: "Once during your turn, you may draw cards until you have 3 cards in your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Genome Hacking", cost: [], damage: "", text: "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack." }
  ];
  public set: string = "PR-SV";
  public name: string = "Mew ex";
  public fullName: string = "Mew ex PR-SV 53";
  public text: string = "Mew ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "copyAttack");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "drawUntilHand:3");
    }
    return state;
  }
}
