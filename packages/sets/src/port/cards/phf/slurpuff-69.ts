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

export class Slurpuff_69 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Swirlix";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Tasting", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may draw a card. If this Pokémon is your Active Pokémon, draw 1 more card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Light Pulse", cost: [], damage: "60", text: "Prevent all effects of your opponent's attacks, except damage, done to this Pokémon during your opponent's next turn." }
  ];
  public set: string = "PHF";
  public name: string = "Slurpuff";
  public fullName: string = "Slurpuff PHF 69";
  public text: string = "Slurpuff";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* preventEffectsNextTurn */ state;
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 1);
    }
    return state;
  }
}
